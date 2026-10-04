import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Hr,
  Tailwind,
  Button,
} from 'react-email';

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
  receivedAt?: string;
}

function formatDate(iso?: string): string {
  const d = iso ? new Date(iso) : new Date();
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });
}

export default function ContactNotificationEmail({
  name,
  email,
  message,
  receivedAt,
}: ContactNotificationProps) {
  const timestamp = formatDate(receivedAt);
  const siteUrl = 'https://zaphenath-portfolio.vercel.app/';
  const replyHref = `mailto:${email}`;

  return (
    <Html lang="en">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                lime: '#C6FF00',
                ink: '#0B0B0B',
                surface: '#FAFAF8',
                card: '#F3F3EE',
                border: '#E2E2D9',
                fg: '#111111',
                mid: '#555550',
                muted: '#888882',
              },
            },
          },
        }}
      >
        <Head />

        <Preview>New message from {name} via your portfolio contact form</Preview>

        <Body style={{ backgroundColor: '#FAFAF8', margin: 0, padding: 0, fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>

          {/* Dark Header */}
          <Section style={{ backgroundColor: '#0B0B0B', padding: 0 }}>
            <Container style={{ maxWidth: 600, margin: '0 auto', padding: '32px 24px' }}>
              <Row>
                <Column>
                  <Text style={{ margin: 0, fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888882' }}>
                    zaphenath-portfolio.vercel.app
                  </Text>
                  <Text style={{ margin: 0, marginTop: 4, fontSize: 18, fontWeight: 600, color: '#FAFAF8', lineHeight: '1.3' }}>
                    Portfolio
                  </Text>
                </Column>
                <Column align="right">
                  <Text style={{ margin: 0, display: 'inline-block', backgroundColor: '#C6FF00', color: '#0B0B0B', fontFamily: 'monospace', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', borderRadius: 999, padding: '4px 12px' }}>
                    Contact
                  </Text>
                </Column>
              </Row>

              <Hr style={{ border: 'none', borderTop: '1px solid #2A2A2A', margin: '24px 0' }} />

              <Heading as="h1" style={{ margin: 0, fontSize: 22, fontWeight: 600, color: '#FAFAF8', lineHeight: '1.3' }}>
                New message from your portfolio
              </Heading>
              <Text style={{ margin: 0, marginTop: 8, fontFamily: 'monospace', fontSize: 11, color: '#888882' }}>
                Received: {timestamp}
              </Text>
            </Container>
          </Section>

          {/* Light Body */}
          <Container style={{ maxWidth: 600, margin: '0 auto', padding: '32px 24px', backgroundColor: '#FAFAF8' }}>

            {/* Sender card */}
            <Section style={{ backgroundColor: '#F3F3EE', border: '1px solid #E2E2D9', borderRadius: 10, padding: '20px 24px', marginBottom: 20 }}>
              <Text style={{ margin: 0, marginBottom: 12, fontFamily: 'monospace', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888882' }}>
                From
              </Text>
              <Row>
                <Column width={52}>
                  <Text style={{ margin: 0, width: 40, height: 40, lineHeight: '40px', textAlign: 'center', borderRadius: '50%', backgroundColor: '#C6FF00', color: '#0B0B0B', fontWeight: 700, fontSize: 16, display: 'block' }}>
                    {name.charAt(0).toUpperCase()}
                  </Text>
                </Column>
                <Column>
                  <Text style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#111111', lineHeight: '1.3' }}>
                    {name}
                  </Text>
                  <Text style={{ margin: 0, marginTop: 2, fontFamily: 'monospace', fontSize: 12, color: '#888882' }}>
                    {email}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Message card */}
            <Section style={{ backgroundColor: '#F3F3EE', border: '1px solid #E2E2D9', borderRadius: 10, padding: '20px 24px', marginBottom: 28 }}>
              <Text style={{ margin: 0, marginBottom: 12, fontFamily: 'monospace', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888882' }}>
                Message
              </Text>
              <Text style={{ margin: 0, fontSize: 14, color: '#111111', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
                {message}
              </Text>
            </Section>

            {/* CTA */}
            <Section style={{ textAlign: 'center', marginBottom: 28 }}>
              <Button
                href={replyHref}
                style={{
                  backgroundColor: '#C6FF00',
                  color: '#0B0B0B',
                  fontWeight: 600,
                  fontSize: 14,
                  padding: '12px 28px',
                  borderRadius: 6,
                  display: 'inline-block',
                  textDecoration: 'none',
                }}
              >
                Reply to {name}
              </Button>
            </Section>

            <Hr style={{ border: 'none', borderTop: '1px solid #E2E2D9', margin: '0 0 16px' }} />

            <Text style={{ margin: 0, fontFamily: 'monospace', fontSize: 11, color: '#888882', textAlign: 'center' }}>
              Or copy directly:{' '}
              <a href={replyHref} style={{ color: '#555550', textDecoration: 'underline' }}>
                {email}
              </a>
            </Text>
          </Container>

          {/* Dark Footer */}
          <Section style={{ backgroundColor: '#0B0B0B', padding: 0 }}>
            <Container style={{ maxWidth: 600, margin: '0 auto', padding: '28px 24px' }}>
              <Hr style={{ border: 'none', borderTop: '1px solid #2A2A2A', margin: '0 0 24px' }} />
              <Row>
                <Column>
                  <Text style={{ margin: 0, fontFamily: 'monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#888882' }}>
                    Sent via
                  </Text>
                  <Text style={{ margin: 0, marginTop: 4, fontSize: 12, color: '#FAFAF8' }}>
                    <a href={siteUrl} style={{ color: '#C6FF00', textDecoration: 'none' }}>
                      {siteUrl}
                    </a>{' '}
                    contact form
                  </Text>
                </Column>
                <Column align="right">
                  <Text style={{ margin: 0, fontFamily: 'monospace', fontSize: 10, color: '#888882', textAlign: 'right', lineHeight: '1.6' }}>
                    Automated notification.
                    <br />
                    No action needed.
                  </Text>
                </Column>
              </Row>
            </Container>
          </Section>

        </Body>
      </Tailwind>
    </Html>
  );
}

ContactNotificationEmail.PreviewProps = {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hi Zaphenath,\n\nI saw your work on the Starrik project and was impressed by the real-time tracking implementation.\n\nBest,\nJohn',
  receivedAt: new Date().toISOString(),
} satisfies ContactNotificationProps;

export { ContactNotificationEmail };