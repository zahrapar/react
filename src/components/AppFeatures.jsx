import React from 'react'
import iphone from '../assets/images/iphone-tilted.svg'
import creditCardIcon from '../assets/images/credit-card.svg'
import shieldIcon from '../assets/images/shield.svg'
import barsGraphicIcon from '../assets/images/bars-graphic.svg'
import communicationIcon from '../assets/images/communication.svg'
import walletIcon from '../assets/images/wallet.svg'
import happyIcon from '../assets/images/happy.svg'

const AppFeatures = () => {
  return (
    <section aria-label="App features" className="features">
      <div className="container">
        <div className="iphone">
          <img src={iphone} alt="an iphone" />
        </div>
        <div className="text space-y-1">
          <h2 className="h1">App Features</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-container">
                <img src={creditCardIcon} alt="Easy Payments" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Easy Payments</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="icon-container">
                <img src={shieldIcon} alt="Data Security" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Data Security</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="icon-container">
                <img src={barsGraphicIcon} alt="Cost Statistics" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Cost Statistics</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="icon-container">
                <img src={communicationIcon} alt="Support 24/7" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Support 24/7</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="icon-container">
                <img src={walletIcon} alt="Regular Cashback" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Regular Cashback</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="icon-container">
                <img src={happyIcon} alt="Top Standards" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Top Standards</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppFeatures
