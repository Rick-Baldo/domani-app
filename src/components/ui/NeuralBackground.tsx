/**
 * NeuralBackground — rede neural orgânica (não-repetitiva)
 *
 * SVG estático com viewBox 1440×900:
 * - ~47 nós distribuídos organicamente (mais densos nas bordas)
 * - ~55 arestas conectando nós próximos
 * - 9 nós pulsantes animados via SVG <animate>
 * - CSS mask: radial-gradient oculta o centro, expõe as bordas
 * - Zero requisições extras, zero runtime JS
 */

// Nós: [x, y]
const nodes: [number, number][] = [
  // borda superior
  [60,35],[200,55],[380,28],[580,48],[760,30],[950,52],[1140,35],[1320,50],[1410,25],
  // canto sup-esq
  [30,180],[140,240],[85,310],
  // canto sup-dir
  [1390,150],[1300,230],[1430,310],
  // borda esq
  [45,390],[110,490],[40,590],
  // borda dir
  [1395,380],[1310,480],[1400,580],
  // canto inf-esq
  [60,680],[160,760],[50,830],
  // canto inf-dir
  [1380,660],[1290,760],[1420,830],
  // borda inferior
  [140,865],[320,845],[520,870],[720,850],[920,875],[1100,848],[1300,870],
  // centro esparso — superior
  [380,220],[640,190],[900,210],[1100,240],
  // centro esparso — médio
  [320,420],[560,380],[780,340],[1000,380],
  // centro esparso — inferior
  [460,540],[720,510],[960,540],
  // centro esparso — fundo
  [580,680],[840,660],
]

// Índices dos nós pulsantes (posições estratégicas)
const pulsingSet = new Set([1, 4, 8, 9, 20, 23, 25, 29, 42])

// Arestas: [índice_A, índice_B]
const edges: [number, number][] = [
  // topo horizontal
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],
  // topo → laterais
  [0,9],[1,10],[7,12],[8,12],
  // topo → centro
  [2,33],[3,34],[4,39],[5,40],[6,36],
  // lateral esq — superior
  [9,10],[10,11],[9,15],[11,15],
  // lateral dir — superior
  [12,13],[13,14],[12,18],[14,18],
  // lateral esq — média
  [15,16],[16,17],[15,37],[17,41],
  // lateral dir — média
  [18,19],[19,20],[18,40],[20,43],
  // lateral esq — inferior
  [21,22],[22,23],[23,26],
  // lateral dir — inferior
  [24,25],[25,26],[26,32],
  // borda inferior
  [26,27],[27,28],[28,29],[29,30],[30,31],[31,32],
  [22,27],[25,31],
  // centro — horizontal
  [33,34],[34,35],[35,36],
  // centro — vertical
  [37,38],[38,39],[39,40],
  [38,41],[42,43],
  // centro — cruzamentos
  [41,44],[42,44],[43,45],[44,45],
  // borda → centro
  [28,44],[29,42],[30,43],[31,45],
]

interface Props {
  opacity?: number
}

export default function NeuralBackground({ opacity = 0.13 }: Props) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{
        opacity,
        // Máscara radial: centro transparente → bordas opacas
        // Efeito: padrão some no centro e aparece nas bordas
        WebkitMaskImage:
          'radial-gradient(ellipse 68% 62% at 50% 48%, transparent 0%, black 62%)',
        maskImage:
          'radial-gradient(ellipse 68% 62% at 50% 48%, transparent 0%, black 62%)',
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {/* ── Arestas ── */}
        <g stroke="#E56D23" strokeLinecap="round">
          {edges.map(([a, b], i) => {
            const [x1, y1] = nodes[a]
            const [x2, y2] = nodes[b]
            // linhas mais próximas das bordas ficam mais espessas
            const isBorderEdge =
              x1 < 160 || x1 > 1280 || y1 < 160 || y1 > 740 ||
              x2 < 160 || x2 > 1280 || y2 < 160 || y2 > 740
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                strokeWidth={isBorderEdge ? 0.9 : 0.55}
                strokeOpacity={isBorderEdge ? 0.9 : 0.5}
              />
            )
          })}
        </g>

        {/* ── Nós estáticos ── */}
        {nodes.map(([cx, cy], i) => {
          if (pulsingSet.has(i)) return null // pulsantes renderizados abaixo
          const isBorder =
            cx < 180 || cx > 1260 || cy < 160 || cy > 740
          return (
            <circle
              key={i}
              cx={cx} cy={cy}
              r={isBorder ? 2.5 : 1.8}
              fill="#E56D23"
              fillOpacity={isBorder ? 0.85 : 0.5}
            />
          )
        })}

        {/* ── Nós pulsantes com glow ── */}
        {Array.from(pulsingSet).map((i, idx) => {
          const [cx, cy] = nodes[i]
          const delay = `${idx * 0.7}s`
          const dur = `${2.8 + idx * 0.3}s`
          return (
            <g key={`pulse-${i}`}>
              {/* Halo externo */}
              <circle cx={cx} cy={cy} r="3" fill="#E56D23" fillOpacity="0">
                <animate
                  attributeName="r"
                  values="3;9;3"
                  dur={dur}
                  begin={delay}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  values="0.5;0;0.5"
                  dur={dur}
                  begin={delay}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Núcleo fixo */}
              <circle cx={cx} cy={cy} r="2.8" fill="#E56D23" fillOpacity="0.9" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
