import { render } from 'preact'
import { Meteor } from 'meteor/meteor'
import { App } from '/imports/ui/App'

Meteor.startup(() => {
  render(<App />, document.getElementById('preact-target'))
})
