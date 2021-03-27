import React, { memo, useEffect } from 'react';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';// shallowEqual 浅层比较：简单类型，比较值，复杂类型，比较地址是否相同,进行性能优化。

import { getTopBannerAction } from './store/actionCreators'

const Recommend = props => {
  const {topBanners} = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual)

  // 组件和redux关联，获取数据和进行操作
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  // const { getBanners, topBanners } = props;

  // useEffect(() => {
  //   getBanners();
  // }, [getBanners]);

  return (
    <div>
      <h2>Recommend: {topBanners.length}</h2>
    </div>
  )
}

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
export default memo(Recommend)
