import React from "react";
import {storiesOf} from "@storybook/react";
import {
  Wrapper,
  TopFilters,
  Button,
  HorizontalLineContent,
  Card,
  CardItem,
  IconInfo,
  Title,
  Subtitle,
  ButtonAction,
  Tab,
  SwitcherInputField,
  InputField,
  InputFieldTextarea,
  InputFieldSelect,
  RadioButton,
  HorizontalLineSeparator,
  Checkbox
} from "../src";

// Extensions Page
storiesOf("Pages", module).add("Extensions page", () => (
  <React.Fragment>
    <div className="container container-gray">
      <TopFilters
        fullText={{
        label: "Search:",
        onChange: a => {
          console.log(a);
        }
      }}
        switchers={[
        [
          {
            customClass: "container__col-md-4 container__col-xs-4",
            switcherTitle: "Status:",
            switcherStatus: "Not installed",
            defaultValue: false,
            onChange: value => {
              console.log(value);
            }
          }, {
            customClass: "container__col-md-4 container__col-xs-4",
            switcherStatus: "Installed",
            defaultValue: false,
            onChange: value => {
              console.log(value);
            }
          }, {
            customClass: "container__col-md-4 container__col-xs-4",
            switcherStatus: "Update",
            defaultValue: false,
            onChange: value => {
              console.log(value);
            }
          }
        ],
        [
          {
            customClass: "container__col-sm-3 container__col-xs-4",
            switcherTitle: "Type:",
            switcherStatus: "Module",
            defaultValue: false,
            onChange: value => {
              console.log(value);
            }
          }, {
            customClass: "container__col-sm-3 container__col-xs-4",
            switcherStatus: "Update",
            defaultValue: false,
            onChange: value => {
              console.log(value);
            }
          }, {
            button: true,
            label: "Clear Filters",
            color: "black",
            buttonType: "bordered",
            onClick: () => {
              console.log("Clear filters clicked");
            }
          }
        ]
      ]}/>
    </div>
    <Wrapper>
      <Button
        label={"update all"}
        buttonType="regular"
        color="orange"
        customClass="mr-2"/>
      <Button
        label={"install all"}
        buttonType="regular"
        color="green"
        customClass="mr-2"/>
      <Button label={"upload license"} buttonType="regular" color="blue"/>
    </Wrapper>
    <Wrapper>
      <HorizontalLineContent hrTitle="Modules"/>
      <Card>
        <div className="container__row">
          <div className="container__col-md-3 container__col-xs-12">
            <CardItem
              itemBorderColor="orange"
              itemFooterColor="red"
              itemFooterLabel="Licence expire at 12/08/2019"
              onClick={() => {
              alert("Card clicked- open popin");
            }}>
              <IconInfo iconName="state green"/>
              <div className="custom-title-heading">
                <Title
                  icon="object"
                  label="Engine-status"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
                <Subtitle
                  label="by Centreon"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
              </div>
              <Button
                buttonType="regular"
                color="orange"
                label="Available 3.1.5"
                iconActionType="update"
                iconColor='white'
                onClick={() => {
                alert("Button clicked");
              }}/>
            </CardItem>
          </div>
          <div className="container__col-md-3 container__col-xs-12">
            <CardItem
              itemBorderColor="green"
              itemFooterColor="orange"
              itemFooterLabel="Licence expire at 12/08/2019"
              onClick={() => {
              alert("Card clicked- open popin");
            }}>
              <IconInfo iconName="state green"/>
              <div className="custom-title-heading">
                <Title
                  icon="object"
                  label="Engine-status"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
                <Subtitle
                  label="by Centreon"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
              </div>
              <Button
                buttonType="bordered"
                color="blue"
                label="Available 2.3.5"
                iconActionType="update"
                iconColor='white'
                onClick={() => {
                alert("Button clicked");
              }}/>
              <ButtonAction
                iconColor='gray'
                buttonActionType="delete"
                buttonIconType="delete"
                onClick={() => {
                alert("Button delete clicked");
              }}/>
            </CardItem>
          </div>
          <div className="container__col-md-3 container__col-xs-12">
            <CardItem
              itemBorderColor="gray"
              onClick={() => {
              alert("Card clicked- open popin");
            }}>
              <div className="custom-title-heading">
                <Title
                  icon="object"
                  label="Engine-status"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
                <Subtitle
                  label="by Centreon"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
              </div>
              <Button
                buttonType="regular"
                color="green"
                label="Available 3.1.5"
                iconActionType="add"
                iconColor='white'
                onClick={() => {
                alert("Button clicked");
              }}/>
            </CardItem>
          </div>
          <div className="container__col-md-3 container__col-xs-12">
            <CardItem
              itemBorderColor="gray"
              onClick={() => {
              alert("Card clicked- open popin");
            }}>
              <div className="custom-title-heading">
                <Title
                  icon="object"
                  label="Engine-status"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
                <Subtitle
                  label="by Centreon"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
              </div>
              <Button
                buttonType="regular"
                color="green"
                label="Available 3.1.5"
                iconActionType="add"
                iconColor='white'
                onClick={() => {
                alert("Button clicked");
              }}/>
            </CardItem>
          </div>
        </div>
      </Card>
    </Wrapper>
    <Wrapper>
      <HorizontalLineContent hrTitle="Widgets"/>
      <Card>
        <div className="container__row">
          <div className="container__col-md-3 container__col-xs-12">
            <CardItem
              itemBorderColor="orange"
              itemFooterColor="blue"
              itemFooterLabel="Licence 5 hosts"
              onClick={() => {
              alert("Card clicked- open popin");
            }}>
              <IconInfo iconName="state green"/>
              <div className="custom-title-heading">
                <Title
                  icon="puzzle"
                  label="Plugin pack manager"
                  titleColor="blue"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
                <Subtitle
                  label="by Centreon"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
              </div>
              <Button
                buttonType="regular"
                color="orange"
                label="Available 3.1.5"
                iconActionType="update"
                iconColor='white'
                onClick={() => {
                alert("Button clicked");
              }}/>
              <ButtonAction
                iconColor='gray'
                buttonActionType="delete"
                buttonIconType="delete"
                onClick={() => {
                alert("Button delete clicked");
              }}/>
            </CardItem>
          </div>
          <div className="container__col-md-3 container__col-xs-12">
            <CardItem
              itemBorderColor="green"
              itemFooterColor="red"
              itemFooterLabel="Licence expire at 12/08/2019"
              onClick={() => {
              alert("Card clicked- open popin");
            }}>
              <IconInfo iconName="state green"/>
              <div className="custom-title-heading">
                <Title
                  icon="puzzle"
                  label="Plugin pack manager"
                  titleColor="blue"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
                <Subtitle
                  label="by Centreon"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
              </div>
              <Button
                buttonType="bordered"
                color="blue"
                label="Available 3.5.6"
                iconActionType="update"
                iconColor='white'
                onClick={() => {
                alert("Button clicked");
              }}/>
              <ButtonAction
                iconColor='gray'
                buttonActionType="delete"
                buttonIconType="delete"
                onClick={() => {
                alert("Button delete clicked");
              }}/>
            </CardItem>

          </div>
          <div className="container__col-md-3 container__col-xs-12">
            <CardItem
              itemBorderColor="gray"
              onClick={() => {
              alert("Card clicked- open popin");
            }}>
              <div className="custom-title-heading">
                <Title
                  icon="puzzle"
                  label="Plugin pack manager"
                  titleColor="blue"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
                <Subtitle
                  label="by Centreon"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
              </div>
              <Button
                buttonType="regular"
                color="green"
                label="Available 3.1.5"
                iconActionType="add"
                iconColor='white'
                onClick={() => {
                alert("Button clicked");
              }}/>
            </CardItem>
          </div>
          <div className="container__col-md-3 container__col-xs-12">
            <CardItem
              itemBorderColor="gray"
              onClick={() => {
              alert("Card clicked- open popin");
            }}>
              <div className="custom-title-heading">
                <Title
                  icon="puzzle"
                  label="Plugin pack manager"
                  titleColor="blue"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
                <Subtitle
                  label="by Centreon"
                  onClick={() => {
                  alert("Card clicked- open popin");
                }}/>
              </div>
              <Button
                buttonType="regular"
                color="green"
                label="Available 3.1.5"
                iconActionType="add"
                iconColor='white'
                onClick={() => {
                alert("Button clicked");
              }}/>
            </CardItem>
          </div>
        </div>
      </Card>
    </Wrapper>
  </React.Fragment>
), {notes: "A very simple component"});


// BAM Corelations Capabilities Page
storiesOf("Pages", module).add("Corelations Capabilities page", () => (
  <React.Fragment>
    <Title titleColor="bam" label="BAM Corelations Capabilities" />
    <br />
    <div className="container container-gray">
      <Tab>
        <div label="Configuration">
          <div className="container__row">
            <div className="container__col-md-2 center-vertical">
              <Subtitle label="Enable business activity" subtitleType="bam" />
            </div>
            <div className="container__col-md-2">
              <SwitcherInputField />
            </div>
          </div>
          <Subtitle label="Information" subtitleType="bam" />
          <div className="container__row">
            <div className="container__col-md-4">
              <InputField 
                type="text" 
                label="Name" 
                error="The field is mandatory" 
                inputSize="middle" 
                iconName="question"
                iconColor="gray"
              />
              <InputFieldTextarea 
                textareaType="middle" 
                label="Description" 
                iconName="question"
                iconColor="gray"
              />
            </div>
            <div className="container__col-md-4">
              <div className="container__row">
                <div className="container__col-md-6 center-vertical m-0">
                  <IconInfo iconColor="gray" iconName="question" iconText="Icon" />
                </div>
                <div className="container__col-md-6">
                  <InputFieldSelect customClass="large" />
                </div>
              </div>
              <br />
              <div className="container__row">
                <div className="container__col-md-7 m-0">
                  <IconInfo iconColor="gray" iconName="question" iconText="Automatically inherit KPI downtime" />
                </div>
                <div className="container__col-md-5">
                  <div className="container__row">
                    <div className="container__col-md-4">
                      <RadioButton name="test" iconColor="green" checked={true} label="YES" />
                    </div>
                    <div className="container__col-md-4">
                      <RadioButton name="test" iconColor="green" label="NO" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container__row">
                <div className="container__col-md-6 center-vertical m-0">
                  <IconInfo iconColor="gray" iconName="question" iconText="Display on remote server" />
                </div>
                <div className="container__col-md-6">
                  <InputFieldSelect customClass="large" />
                </div>
              </div>
            </div>
          </div>
          <div className="container__row">
            <div className="container__col-xs-12">
              <HorizontalLineSeparator />
            </div>
          </div>
          <div className="container__row">
            <div className="container__col-xs-12">
              <Subtitle label="Business View" subtitleType="bam" />
            </div>
          </div>
          <div className="container__row">
            <div className="container__col-md-4">
              <div>
                <IconInfo iconColor="gray" iconName="question" iconText="Link to Business View(s)" />
              </div>
              <br />
              <InputFieldSelect customClass="big" />
            </div>
          </div>
          <br />
          <div className="container__row">
            <div className="container__col-xs-12">
              <HorizontalLineSeparator />
            </div>
          </div>
          <div className="container__row">
            <div className="container__col-md-1 center-vertical">
              <Subtitle label="Notification" subtitleType="bam" />
            </div>
            <div className="container__col-md-2">
              <SwitcherInputField />
            </div>
          </div>
          <div className="container__row">
            <div className="container__col-md-4">
              <div>
                <IconInfo iconColor="gray" iconName="question" iconText="Link to Business View(s)" />
              </div>
              <br />
              <InputFieldSelect />
            </div>
            <div className="container__col-md-4">
              <div className="container__row">
                <div className="container__col-md-6 center-vertical m-0">
                  <IconInfo iconColor="gray" iconName="question" iconText="Notification time period" />
                </div>
                <div className="container__col-md-6 m-0">
                  <InputFieldSelect customClass="large" />
                </div>
              </div>
              <br />
              <div className="container__row">
                <div className="container__col-md-6 center-vertical m-0">
                  <IconInfo iconColor="gray" iconName="question" iconText="Notification interval" />
                </div>
                <div className="container__col-md-6 m-0 center-vertical">
                  <InputField 
                    type="text"
                    inputSize="smallest m-0" 
                  />
                  <IconInfo iconText="*60 seconds" />
                </div>
              </div>
            </div>
            <div className="container__col-md-4">
              <div className="container__row mb-1">
                <div className="container__col-md-8">
                  <IconInfo iconColor="gray" iconName="question" iconText="Notification option" />
                </div>
              </div>
              <div className="container__row">
                <div className="container__col-md-3 m-0">
                  <Checkbox name="test" iconColor="green" checked={true} label="Recovery" />
                </div>
                <div className="container__col-md-3 m-0">
                  <Checkbox name="test" iconColor="green" checked={true} label="Warning" />
                </div>
                <div className="container__col-md-3 m-0">
                  <Checkbox name="test" iconColor="green" checked={true} label="Critical" />
                </div>
                <div className="container__col-md-3 m-0">
                  <Checkbox name="test" iconColor="green" checked={true} label="Flapping" />
                </div>
              </div>
              <div className="container__row">
                <div className="container__col-md-5 m-0">
                  <IconInfo iconColor="gray" iconName="question" iconText="Enable notification" />
                </div>
                <div className="container__col-md-5">
                  <div className="container__row">
                    <div className="container__col-md-4">
                      <RadioButton name="test" iconColor="green" checked={true} label="YES" />
                    </div>
                    <div className="container__col-md-4">
                      <RadioButton name="test" iconColor="green" label="NO" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Button
              label="SAVE"
              buttonType="validate"
              color="green normal"
            />
          </div>
        </div>
        <div label="Indicators">
          Lorem Ipsum dolor sit amet Indicators
        </div>
        <div label="Reporting">
          Lorem Ipsum dolor sit amet Reporting
        </div>
        <div label="Escalation">
          Lorem Ipsum dolor sit amet Escalation
        </div>
        <div label="Event Handler">
          Lorem Ipsum dolor sit amet Event Handler
        </div>
      </Tab>
    </div>
  </React.Fragment>
), {notes: "A very simple component"});