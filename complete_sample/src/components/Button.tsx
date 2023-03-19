import styles from './Button.module.css'

interface Props {
  type?: 'primary' | 'outline'
  size?: 's' | 'm'
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ type = 'primary', size = 'l', children }) => {
  const typeClass = type === 'primary' ? styles.typePrimary : styles.typeOutline
  const sizeClass = size === 's' ? styles.sizeS : size === 'm' ? styles.sizeM : styles.sizeL

  return <button className={`${styles.button} ${typeClass} ${sizeClass}`}>{children}</button>
}
