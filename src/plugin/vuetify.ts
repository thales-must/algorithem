import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/scss/materialdesignicons.scss'
import { md1 } from 'vuetify/blueprints'

const vuetify = createVuetify({
  // blueprint: md1,
  components,
  directives,
})

export default vuetify;