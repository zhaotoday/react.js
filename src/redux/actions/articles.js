import actionTypes from '../consts/articles'
import Model from '../models/articles'
import createAction from 'redux-actions/lib/createAction'

export const postArticle = createAction(
  actionTypes.POST_ARTICLE,
  (options) => {
    return new Model()
      .addPaths(['{category}', 'news'])
      .replace({
        category: 123
      })
      .POST({
        data: options.data
      })
  }
)
