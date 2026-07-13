const ITEMS = [
  'OpenAI GPT-4o', 'LangChain', 'TensorFlow', 'PyTorch', 'AWS', 'Azure AI',
  'Google Cloud', 'Pinecone', 'FastAPI', 'React', 'Node.js', 'PostgreSQL',
  'Zapier', 'Shopify', 'WhatsApp API', 'Twilio',
]

function Group() {
  return (
    <div className="marquee-group">
      {ITEMS.map((item) => (
        <span className="marquee-item" key={item}>
          <span className="marquee-dot"></span>
          {item}
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Group />
        <Group />
      </div>
    </div>
  )
}
