interface ChessBackgroundProps {
  squareSize: number;
  className?: string;
}

export const ChessBackground: React.FC<ChessBackgroundProps> = ({
  squareSize,
  className = "",
}) => {
  const rows = 40;
  const cols = 40;

  const squares = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const isBlack = (i + j) % 2 === 1;
      squares.push(
        <div
          key={`${i}-${j}`}
          style={{
            width: squareSize,
            height: squareSize,
            backgroundColor: isBlack ? "#000" : "#fff",
            position: "absolute",
            top: i * squareSize,
            left: j * squareSize,
          }}
        />
      );
    }
  }

  return <div className={`absolute -z-10 inset-4 ${className}`}>{squares}</div>;
};
