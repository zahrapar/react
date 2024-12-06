import React from 'react'
import checkCircleIcon from '../assets/images/bx-check-circle.svg'
import topRightImage from '../assets/images/top-right.svg'
import walletIcon from '../assets/images/wallet.svg'
import creditCardIcon from '../assets/images/credit-card.svg'
import coImage from '../assets/images/co.svg'

const Features = () => {
  return (
    <section className="features-sectiontow">
      <div className="feature-container">
        <div>
          <p className="title">
            Make your money
            <br />
            transfer simple and clear
          </p>
          <div className="list">
            <div className="line">
              <img src={checkCircleIcon} className="ficon" alt="checkmark" />
              Banking transactions are free for you
            </div>
            <div className="line">
              <img src={checkCircleIcon} className="ficon" alt="checkmark" />
              No monthly cash commission
            </div>
            <div className="line">
              <img src={checkCircleIcon} className="ficon" alt="checkmark" />
              Manage payments and transactions online
            </div>
          </div>
          <button>Learn more →</button>
        </div>
        <div className="image">
          <img src={topRightImage} alt="Bank" />
        </div>
      </div>

      <div className="feature-container">
        <div>
          <img src={coImage} alt="list" />
        </div>
        <div className="feature-content">
          <p className="title">
            Receive payment from
            <br />
            international bank details
          </p>
          <div className="bank-details">
            <div className="card">
              <img src={walletIcon} className="cicon" alt="Wallet" />
              <p>
                Manage your payments online. Mollis congue egestas egestas
                fermentum fames.
              </p>
            </div>
            <div className="card">
              <img src={creditCardIcon} className="cicon" alt="Creditcard" />
              <p>
                A elementur and imperdiet enim, pretium etiam facilisi aenean
                quam mauris.
              </p>
            </div>
          </div>
          <button>Learn more →</button>
        </div>
      </div>
    </section>
  )
}

export default Features
