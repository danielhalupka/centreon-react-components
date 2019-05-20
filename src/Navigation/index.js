import React, { Component } from "react";
import classnames from "classnames";
import styles from "./navigation.scss";
import BoundingBox from "../BoundingBox";
    
class Navigation extends Component { 
  state = {
    activeSecondLevel: null
  };
 
  getPageId = () => {
    const { pathname, search } = window.location;
    let pageId = "";
    if (search.match(/p=/)) {
      pageId = search.split("p=")[1];
    } else { 
      const { reactRoutes } = this.props;
      pageId = reactRoutes[pathname] || pathname;
    }
    return pageId;
  };

  getUrlFromEntry = entryProps => {
    const urlOptions =
      entryProps.page + (entryProps.options !== null ? entryProps.options : "");
    const url = entryProps.is_react
      ? entryProps.url
      : "/main.php" + "?p=" + urlOptions;
    return { url, urlOptions };
  };

  handleDirectClick = (levelOneKey, levelOneProps) => {
    clearTimeout(this.clickTimeout);
    this.doubleClicked = true;
    const urlOptions =
      levelOneKey.slice(1) +
      (levelOneProps.options !== null ? levelOneProps.options : "");
    this.goToPage("/main.php?p=" + urlOptions, levelOneKey);
  };

  activateSecondLevel = secondLevelPage => {
    const { activeSecondLevel } = this.state;

    this.setState({
      activeSecondLevel:
        activeSecondLevel == secondLevelPage ? true : secondLevelPage
    });
  };

  render() {
    const { customStyle, navigationData } = this.props;
    const { activeSecondLevel } = this.state;
    const pageId = this.getPageId();

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
              [styles[`color-${firstLevel.color}`]]: true,
              [styles[
                firstLevel.toggled ||
                (!isNaN(pageId) && String(pageId).charAt(0) == firstLevel.page)
                  ? `active-${firstLevel.color}`
                  : ""
              ]]: true,
              [styles[
                firstLevel.toggled ||
                (!isNaN(pageId) && String(pageId).charAt(0) == firstLevel.page)
                  ? `active`
                  : ""
              ]]: true
            })}
            key={`firstLevel-${firstLevel.page}`}
          >
            <span
              className={classnames(styles["menu-item-link"])}
              onDoubleClick={() => {
                this.handleDirectClick(firstLevel.page, firstLevel);
              }}
            >
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
              {firstLevel.children.map(secondLevel => {
                const secondLevelUrl = this.getUrlFromEntry(secondLevel);
                return (
                  <li
                    className={classnames(styles["collapsed-item"], {
                      [styles[
                        activeSecondLevel == secondLevel.page ||
                        (!activeSecondLevel &&
                          !isNaN(pageId) &&
                          String(pageId).substring(0, 3) == secondLevel.page)
                          ? `active`
                          : ""
                      ]]: true
                    })}
                    onClick={() => {
                      if (
                        !isNaN(pageId) &&
                        String(pageId).charAt(0) == firstLevel.page
                      ) {
                        this.activateSecondLevel(secondLevel.page);
                      }
                    }}
                    key={`secondLevel-${secondLevel.page}`}
                  >
                    <span
                      className={classnames(
                        styles["collapsed-item-level-link"],
                        {
                          [styles[`color-${firstLevel.color}`]]: true,
                          [styles[
                            secondLevel.groups.length < 1 ? "img-none" : ""
                          ]]: true
                        }
                      )}
                    >
                      {secondLevel.label}
                    </span>
                    <BoundingBox active={true}>
                      {({ rectBox }) => {
                        let styleFor3rdLevel = {};
                        if (rectBox && rectBox.bottom < 1) {
                          styleFor3rdLevel = {
                            height: rectBox.offsetHeight + rectBox.bottom,
                            overflowY: "scroll"
                          };
                        }
                        return (
                          <ul
                            className={classnames(
                              styles["collapse-level"],
                              styles["collapsed-level-items"],
                              styles["first-level"],
                              styles["list-unstyled"],
                              styles["towards-up"]
                            )}
                            style={styleFor3rdLevel}
                          >
                            {secondLevel.groups.map(group => (
                              <React.Fragment
                                key={`thirdLevelFragment-${group.label}`}
                              >
                                {secondLevel.groups.length > 1 ? (
                                  <span
                                    className={classnames(
                                      styles["collapsed-level-title"]
                                    )}
                                  >
                                    <span>{group.label}</span>
                                  </span>
                                ) : null}
                                {group.children.map(thirdLevel => {
                                  const thirdLevelUrl = this.getUrlFromEntry(
                                    thirdLevel
                                  );
                                  return (
                                    <li
                                      className={classnames(
                                        styles["collapsed-level-item"],
                                        {
                                          [styles[
                                            thirdLevel.toggled ||
                                            (!isNaN(pageId) &&
                                              pageId == thirdLevel.page)
                                              ? `active`
                                              : ""
                                          ]]: true,
                                          [styles[
                                            thirdLevel.toggled ||
                                            (!isNaN(pageId) &&
                                              pageId == thirdLevel.page)
                                              ? `active-${firstLevel.color}`
                                              : ""
                                          ]]: true
                                        }
                                      )}
                                      key={`thirdLevel-${thirdLevel.page}`}
                                    >
                                      <a
                                        href="#"
                                        className={classnames(
                                          styles["collapsed-item-level-link"],
                                          {
                                            [styles[
                                              `color-${firstLevel.color}`
                                            ]]: true
                                          }
                                        )}
                                      >
                                        <span>{thirdLevel.label}</span>
                                      </a>
                                    </li>
                                  );
                                })}
                              </React.Fragment>
                            ))}
                          </ul>
                        );
                      }}
                    </BoundingBox>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default Navigation;
