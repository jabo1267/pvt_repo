interface FallingHeartsProps {}

export default function FallingHearts({}: FallingHeartsProps) {
  return (
    <div className="falling-hearts">
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="heart">♡</div>
      ))}
    </div>
  );
}
