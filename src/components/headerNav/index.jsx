import React from "react";
import "./style.less"

const HeaderNav = () => {
    return (
        <div id="header-nav-container" className="clear-fix">
            <div className="header-nav-left">
                <span>广州</span>
                <i className="iconfont icon-CBB-xiajiantou"></i>
            </div>
            <div className="header-nav-center">
                <div className="search-container">
                    <i className="iconfont icon-CBB-sousuo" id="search-icon"></i>
                    <span>点击去搜索</span>
                </div>

            </div>
            <div className="header-nav-right">
                <i className="iconfont icon-CBB-xiaozhushou" id="message-icon"></i>
            </div>
        </div>
    )
}

export default HeaderNav;