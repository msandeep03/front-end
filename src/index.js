import React, { Component } from 'react'
import ReactDOM             from 'react-dom'
import { BrowserRouter }    from 'react-router-dom'
import { Route }            from 'react-router-dom'
import { Switch }           from 'react-router-dom'


// import RouterAppDefault     from 'app/default/page/web/Router'
// import RouterAppHoney       from 'app/honey/page/web/Router'
// import RouterAppPolyvore    from 'app/polyvore/page/web/Router'

import GlobalStyle          from 'evoke-me/page/web/GlobalStyle'
import ProviderSpace        from 'evoke-me/space/all/Provider'
import { optionSet }        from 'evoke-me/space/api/manager'

import PageHome             from 'app/honey/page/web/PageHome'
import PageStore            from 'app/honey/page/web/PageStore'
import PageProductList      from 'app/honey/page/web/PageProductList'


optionSet({ HMR: true })

class App extends Component {
  render() {
    return (
      <ProviderSpace>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={PageHome} />
            <Route exact path='/store' component={PageStore} />
            <Route exact path='/products' component={PageProductList} />
            {/* <Route exact path='/app.polyvore*' component={RouterAppPolyvore} />
            <Route exact path='/*' component={RouterAppDefault} /> */}
          </Switch>
        </BrowserRouter>
      </ProviderSpace>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
