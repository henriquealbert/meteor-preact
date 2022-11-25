// import { useState, useEffect } from 'preact/hooks'
// import { Tracker } from 'meteor/tracker'
// import { LinksCollection } from '../api/links'

export const Info = () => {
  // TODO:
  // const [links, setLinks] = useState([])

  // useEffect(() => {
  //   Tracker.autorun(() => {
  //     const _links = LinksCollection.find().fetch()
  //     setLinks(_links)
  //   })
  // }, [])

  return (
    <div>
      <h2>Learn Meteor!</h2>
      {/* <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  )
}
