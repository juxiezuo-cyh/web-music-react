import React, { memo, useEffect, useState } from 'react';
import { DiscoverWrapper, TopMenu } from './style';
import { dicoverMenu } from '@/common/local-data';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import request from '@/services/request';


export default memo(function Discover(props) {
  const { route } = props;
  // const [banners]
  
  useEffect(() => {
    request({
      url: '/banner'
    }).then(res => {
      console.log(res)
    })
  }, [])

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map( item => <div className="item" key={item.title}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </div>)
          }
        </TopMenu>
      </div>

      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
