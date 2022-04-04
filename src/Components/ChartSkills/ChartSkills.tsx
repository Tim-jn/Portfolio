import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import './ChartSkills.scss'

const data = [
  {
    name: 'React',
    value: 75,
  },
  {
    name: 'CSS3',
    value: 75,
  },
  {
    name: 'Sass',
    value: 70,
  },
  {
    name: 'HTML5',
    value: 70,
  },
  {
    name: 'JavaScript',
    value: 50,
  },
  {
    name: 'WordPress',
    value: 50,
  },
  {
    name: 'Redux',
    value: 30,
  },
  {
    name: 'Jest',
    value: 20,
  },
]

export default function PieChartSkills() {
  return (
    <ResponsiveContainer>
      <BarChart
        layout="vertical"
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 5,
        }}
        barSize={20}
      >
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tickMargin={15}
        />
        <XAxis type="number" hide={true} />
        <Bar dataKey="value" />
      </BarChart>
    </ResponsiveContainer>
  )
}
