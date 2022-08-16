import { Container } from 'react-bootstrap'

export default function DonationForm() {
  return (
    <Container className='mt-auto mb-auto'>
        <form style={{background: 'none', margin: '5px 0'}} action="https://www.paypal.com/donate" method="post" target="_top">
            <input style={{background: 'none', border: 'none'}} type="hidden" name="hosted_button_id" value="YV9H4KCBK3BX2" />
            <input style={{background: 'none', border: 'none'}} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <image alt="" border="2" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="2" height="2" />
        </form>
    </Container>
  )
}
