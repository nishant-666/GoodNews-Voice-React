import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './style.css'
import { Icon } from 'semantic-ui-react'
const colors = [
  'orange'
]

class ExampleMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
        <Menu  fluid widths={1} inverted centered style={{borderRadius:0,alignItems:'center'}} size='large'>
        
        <Menu.Menu>
          
        <a target="new" href="https://play.google.com/store/apps/details?id=com.goodbook.goodnews" style={{fontSize:16,fontFamily:'PT Sans'}}>
          <Menu.Item
            name='help'
            active={activeItem === 'help'}
            onClick={this.handleItemClick}
          >
              <Icon name='download' />
          Download the GoodNews Android App
          </Menu.Item>
          </a>
        </Menu.Menu>
      </Menu>
    )
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredInvertedMenus