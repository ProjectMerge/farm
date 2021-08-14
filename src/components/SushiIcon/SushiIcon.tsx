import React from 'react'
const m_icon = require('../../assets/img/m-icon.png')

interface SushiIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const SushiIcon: React.FC<SushiIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <span
    role="img"
    style={{
      fontSize: size,
      filter: v1 ? 'saturate(0.5)' : undefined,
    }}
  >
    
<img alt='logo' style={{ width: 70 }} src={m_icon} />
  </span>
)

export default SushiIcon
