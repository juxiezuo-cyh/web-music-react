import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppHeaderWrapper, AppHeaderLeft, AppHeaderRight } from './style';
import { headerLinks } from '@/common/local-data';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const AppHeader = () => {

  const showSelectItem = ((item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  })

  return(
    <AppHeaderWrapper>
      <div className="content wrap-v1">
        <AppHeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </AppHeaderLeft>
        
        <AppHeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </AppHeaderRight>
      </div>

      <div className="divider"></div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader);