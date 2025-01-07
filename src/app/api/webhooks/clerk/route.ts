import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { prisma } from '@/lib';

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      'Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local'
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error: Could not verify webhook:', err);
    return new Response('Error: Verification error', {
      status: 400,
    });
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`);

  if (eventType === 'user.created') {
    try {
      const created = await prisma.user.create({
        data: {
          id: evt.data.id,
          username: evt.data.username as string,
          avatar: evt.data.image_url,
          cover: '',
          name: evt.data.first_name,
        },
      });

      return new Response(`User ${created.username} has been created`, {
        status: 200,
      });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
        return new Response(err.message, { status: 500 });
      }
    }
  }

  if (eventType === 'user.updated') {
    try {
      const updated = await prisma.user.update({
        where: {
          id: evt.data.id,
        },
        data: {
          username: evt.data.username as string,
          avatar: evt.data.image_url,
          name: evt.data.first_name,
        },
      });

      return new Response(`User ${updated.username} has been updated`, {
        status: 200,
      });
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        return new Response(err.message, { status: 500 });
      }
    }
  }

  if (eventType === 'user.deleted') {
    try {
      const deleted = await prisma.user.delete({
        where: {
          id: evt.data.id,
        },
      });

      return new Response(`User ${deleted.username} has been deleted`, {
        status: 200,
      });
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        return new Response(err.message, { status: 500 });
      }
    }
  }

  return new Response('Webhook received', { status: 200 });
}
