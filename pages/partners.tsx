import Head from 'next/head'
import React, { Fragment } from 'react'
import Footer from 'sections/footer/Footer'
import Navbar from 'sections/navbar/Navbar'

const partners = () => {
    let partner = {
        title: "Partner",
        detail: "If you're and established influencer / company / project looking to partner."
    };
    let influencer = {
        title: "Influencer",
        detail: "If you're an established influencer / company / project looking to partner."
    };
    let investor = {
        title: "Investor",
        detail: "If you're an established influencer / company / project looking to partner."
    }
    let cardContents = [
        [partner.title,partner.detail,"1"],
        [influencer.title,influencer.detail, "2"],
        [investor.title,investor.detail, "3"],
        [partner.title,partner.detail, "4"],
        [partner.title,partner.detail, "5"],
        [partner.title,partner.detail, "6"]
    ];
  return (
      <Fragment>
          <Head>
              <title>Partners</title>
          </Head>
          <Navbar />
          <div className='partners'>
          <main>
              <h1 className='partners-h1'>Want to work with us?</h1>
                  <p className='partners-p1'>There are many ways to partner with us. Find the right fit for you and your organization.</p>
              <div className='partner-cards'>
                      {cardContents.map((card, index) => { 
                    return (
                        <div className={"partner-card partner-card-"+card[2]} key={index}>
                            <span className='partners-heart'>&hearts;</span>
                            <h2 className='partners-h2'>{card[0]}</h2>
                            <p className='partners-card-p'>{card[1]}</p>
                            <button className='partners-button'>Contact</button>
                        </div>
                    )
              })}
                  </div>
                  <div className='partners-div-2'>
                      <img className='partners-image' src="/partners-image.png" alt="" />
                  <h2 className='partners-h1'>Grow your business with Drozee</h2>
                  <p>You can get filtered students, who will have specific skills who can compete on the market.</p>
                  <ol>
                      <li>Best candidates</li>
                      <li>No search, system will do it for you.</li>
                      <li>No more wasting time for recruiters.</li>
                  </ol>
                      <button className='partners-button'>Contact</button>
                      </div>
              </main>
              </div>
          <Footer/>
      </Fragment>
  )
}

export default partners