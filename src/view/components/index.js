import SubMenu from './menu/submenu'
import LfMenu from './menu/menu'
import LfTable from './table/table'
const components = {
  SubMenu,
  LfMenu,
  LfTable
}
export default {
  install(Vue) {
    for (const k in components) {
      Vue.component(k, components[k])
    }
  }
}
