// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination by Age</h1>
      <PieChart width={900} height={300}>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="60%"
          dataKey="count"
          outerRadius="70%"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill=" #a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
