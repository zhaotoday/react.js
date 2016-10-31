import i18next from 'i18next'

const DEFAULT_LNG = 'en'
const DEFAULT_NS = 'translation'

/**
 * 新增语言资源
 * @param module {string} 模块
 * @param req {function} 资源
 */
const addResources = (module, req) => {
  req.keys().forEach((path) => {
    const resources = req(path)
    const paths = path.split('/')
    const lng = paths[1]
    const ns = module || DEFAULT_NS

    i18next.addResourceBundle(lng, ns, resources, true, true)
  })
}

// i18n 初始化
i18next.init({
  'debug': true,
  'lng': DEFAULT_LNG,
  'load': 'all'
})

addResources(null, require.context('./locales/', true, /\.json$/))
const t = i18next.getFixedT('en', DEFAULT_NS)
console.log(t('test'))
