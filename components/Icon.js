import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export function TwitterIcon() {
  return <FontAwesomeIcon icon={faTwitter} size="xl"/>;
}
export function FacebookIcon() {
  return <FontAwesomeIcon icon={faFacebook} size="xl"/>;
}
export function PlusIcon() {
  return <FontAwesomeIcon icon={faPlus} />;
}