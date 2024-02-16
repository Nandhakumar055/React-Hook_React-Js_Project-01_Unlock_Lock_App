import {useState} from 'react'

import {
  LockContainer,
  LockImage,
  LockText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)

  const imageUrl = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLock ? 'lock' : 'unlock'
  const displayText = isLock ? 'Locked' : 'Unlocked'
  const buttonText = isLock ? 'Unlock' : 'Lock'

  const onClickLockButton = () => {
    setLock(prevState => !prevState)
  }

  return (
    <LockContainer>
      <LockImage src={imageUrl} alt={altText} />
      <LockText>Your Device is {displayText}</LockText>
      <LockButton onClick={onClickLockButton}>{buttonText}</LockButton>
    </LockContainer>
  )
}

export default Unlock
