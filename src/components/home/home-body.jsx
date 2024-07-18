import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../partials/icon.jsx'
import HomeButton from './home-button.jsx'

import lang from 'lang'

const langContext = lang.home

export default class HomeBody extends React.PureComponent {
  render() {
    const socialIcons = this.props.profile.social.map((element, i) => (
      <a key={i} className='pt-content-card__body__social-icons__icon' href={element.url} rel="noopener" target='_blank' title={element.text}>
        <Icon iconName={element.iconName} iconColor={element.hoverColor} />
      </a>
    ))

    return (
      <div className='pt-content-card__body flex flex-dc flex-main-center'>
        <div className='pt-content-card__body__icons flex flex-cross-center flex-sa'>
          <Link to='/about' title={langContext.about}><HomeButton iconTitle={langContext.about_alt} iconName='account' /></Link>
          <a href='https://drive.google.com/file/d/1_s7faL5UKfJmiBgwDZuk0ypNn3_rknNT/view?usp=sharing' title='Resume' target='_blank'><HomeButton iconTitle="Resume" iconName='web' /></a>
          <Link to='/work' title={langContext.work}><HomeButton iconTitle={langContext.work_alt} iconName='folder' /></Link>
          {/* <Link to='/contact' title={langContext.contact}><HomeButton iconTitle={langContext.contact_alt} iconName='message' /></Link> */}
        </div>
        {
          this.props.profile.social.length > 0 &&
          <div className='pt-content-card__body__social-icons flex flex-full-center'>
            {socialIcons}
          </div>
        }
      </div>
    )
  }
}
