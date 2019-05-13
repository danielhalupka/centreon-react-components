import React, { Component } from "react";
import classnames from "classnames";
import styles from "./navigation.scss";

class Navigation extends Component {

  state = {
    navigationData: []
  };
  
  // activate level 1 (display colored menu)
  activateTopLevelMenu = index => {
    let { navigationData } = this.props;

    navigationData.forEach(key => {
      navigationData[key].active = (key === index);
    })

    this.setState({
      navigationData
    });
  };

  // check if current tab is active
  isActive = (pageId, urlParams) => {
    let isActive = false;
    if (urlParams.url.match(/main\.php/)) { // legacy url
      isActive = pageId == urlParams.urlOptions;
    } else { // react route
      isActive = pageId == urlParams.url;
    }

    return isActive;
  };

  // get page id
  // legacy routes ==> get topology page
  // react routes ==> get path (eg: /administration/extensions/manager)
  getPageId = () => {
    const { pathname, search } = this.props.history.location;
    let pageId = '';
    if (search.match(/p=/)) { // legacy url
      pageId = search.split("p=")[1];
    } else { // react route
      pageId = pathname;
    }
    return pageId;
  }

  // get url parameters from navigation entry
  // eg: {url: '/administration/extensions/manager', urlOptions: ''}
  // eg: {url: 'main.php?p=570101&o=c', urlOptions: '&o=c'}
  getUrlFromEntry = (entryKey, entryProps) => {
    const urlOptions = entryKey.slice(1) + (entryProps.options !== null ? entryProps.options : '');
    const url = entryProps.is_react == '1'
      ? entryProps.url
      : '/main.php' + "?p=" + urlOptions;
    return { url, urlOptions };
  }

  // navigate to the page
  goToPage = (route, topLevelIndex) => {
    const { history } = this.props;
    this.activateTopLevelMenu(topLevelIndex);
    history.push(route);
  };

    // handle direct click on level 1
    handleDirectClick = (levelOneKey, levelOneProps) => {
      clearTimeout(this.clickTimeout)
      this.doubleClicked = true
      const urlOptions = levelOneKey.slice(1) +
        (levelOneProps.options !== null ? levelOneProps.options : '')
      this.goToPage(
        "/main.php?p=" + urlOptions,
        levelOneKey
      )
    }


  render() {
    const { customStyle, navigationData } = this.props;
    return (
      <ul
        className={classnames(
          styles["menu"],
          styles["menu-items"],
          styles["list-unstyled"],
          styles[customStyle ? customStyle : ""]
        )}
      >
        {navigationData.map(firstLevel => (
          <li
            className={classnames(styles["menu-item"], {
              [styles[`color-${firstLevel.color}`]]: true
            })}
          >
            <span className={classnames(styles["menu-item-link"])} 
            onDoubleClick={() => {this.handleDirectClick(firstLevel.page, firstLevel)}}>
              <span
                className={classnames(styles["iconmoon"], {
                  [styles[`icon-${firstLevel.icon}`]]: true
                })}
              >
                <span className={classnames(styles["menu-item-name"])}>
                  {firstLevel.label}
                </span>
              </span>
            </span>
            <ul
              className={classnames(
                styles["collapse"],
                styles["collapsed-items"],
                styles["list-unstyled"],
                { [styles[`border-${firstLevel.color}`]]: true }
              )}
            >
              {firstLevel.children.map(secondLevel => (
                <li className={classnames(styles["collapsed-item"])}>
                  <span
                    className={classnames(styles["collapsed-item-level-link"], {
                      [styles[`color-${firstLevel.color}`]]: true
                    })}
                  >
                    {secondLevel.label}
                  </span>

                  <ul
                    className={classnames(
                      styles["collapse-level"],
                      styles["collapsed-level-items"],
                      styles["first-level"],
                      styles["list-unstyled"]
                    )}
                  >
                    {secondLevel.groups.map(group => (
                      <React.Fragment>
                        {secondLevel.groups.length > 1 ? (
                          <span
                            class={classnames(styles["collapsed-level-title"])}
                          >
                            <span>{group.label}</span>
                          </span>
                        ) : null}
                        {group.children.map(thirdLevel => (
                          <li
                            className={classnames(
                              styles["collapsed-level-item"],
                            )}
                          >
                            <a
                              href="#"
                              className={classnames(
                                styles["collapsed-item-level-link"],
                                { [styles[`color-${firstLevel.color}`]]: true }
                              )}
                            >
                              <span>{thirdLevel.label}</span>
                            </a>
                          </li>
                        ))}
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default Navigation;
