import * as actionTypes from './constants';
import { getTopBanners } from '@/services/recommend';

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

// 网络请求
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      // 执行这里的时候，就是在派发changeTopBannerAction这个函数，action里面就有了type类型和topBanners这两个数据。
      // 所以在reducer里面就可以通过判断type的类型，对数据进行赋值了。
      dispatch(changeTopBannerAction(res))
    })
  }
}