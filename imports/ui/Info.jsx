import { useTracker } from '../../packages/react-meteor-data'
import { LinksCollection } from '../api/links'

export const Info = () => {
  const links = useTracker(() => LinksCollection.find().fetch())
  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
