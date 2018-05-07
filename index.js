import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import BlankPage2 from "../blankPage2"
import DrawBar from "../DrawBar"
import { DrawerNavigator, NavigationActions } from "react-navigation"
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base"
import { Grid, Row } from "react-native-easy-grid"

import { setIndex } from "../../actions/list"
import { openDrawer } from "../../actions/drawer"
import styles from "./styles"

class Newsitems extends Component {
  constructor(props) {
    super(props)
    this.state = { newsitems: [] }
    console.warn('+++ Newsitems constructor:', props)
    fetch("https://manager.piousbox.com/api/sites/view/travel-guide.mobi.json").then(r => r.json()).then(_data => {
      console.warn("+++ data:", _data)
      this.setState({ newsitems: _data.site.newsitems })
    })
  }

  static navigationOptions = {
    header: null
  }
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  }

  newPage(index) {
    this.props.setIndex(index)
    Actions.blankPage()
  }

  render() {
    console.log(DrawNav, "786785786")
    console.log('+++ Newsitems:', this.props, this.state)
    // console.warn('error!', this.props, this.state)

    // HEREHERE
    return (
      <Container style={styles.container}>
        <Header>
          { /* <Left>
            <Button transparent onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Newsitems" })]
                  })
                )
                DrawerNav.goBack()
              }} >
              <Icon active name="power" />
            </Button>
          </Left> */ }
          <Body>
            <Title>What's new</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => DrawerNav.navigate("DrawerOpen")} >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid style={styles.mt}>
            { this.state.newsitems && this.state.newsitems.map((n, i) => (
              <Row key={i} >
                <Text>{n.name}</Text>
              </Row>
            ))}
          </Grid>
        </Content>
      </Container>
    )
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  }
}
const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list
})

const NewsitemsSwagger = connect(mapStateToProps, bindAction)(Newsitems)
const DrawNav = DrawerNavigator(
  {
    Newsitems: { screen: NewsitemsSwagger },
    'A nkPage2': { screen: BlankPage2 },
    // 'Art & Entertainment': { screen: ArtEntertainment },
  },
  {
    contentComponent: props => (<DrawBar {...props} />),
    drawerPosition: 'right',
  }
)
const DrawerNav = null
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation
  return {
    header: null
  }
}
export default DrawNav
