import React from "react";
import "./style.less"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const BottomNav = () => {
    return (
        <div className="nav-footer">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        <i className="iconfont icon-CBB-baohu"></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/find" activeClassName="active">
                        <i className="iconfont icon-CBB-gaoyong"></i>
                        发现
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lifeService" activeClassName="active">
                        <i className="iconfont icon-CBB-douyinlogo"></i>
                        生活服务
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mine" activeClassName="active">
                        <i className="iconfont icon-CBB-wode"></i>
                        我的
                    </NavLink>
                </li>
            </ul>
        </div>
    )

}
export default BottomNav;