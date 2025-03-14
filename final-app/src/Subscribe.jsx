import './styleSubscribe.css';
import SubscribeModal from './SubscribeModal';
import EditModal from './EditModal';

function Subscribe() {
    return (
        <div className='main__div'>
            <h2 className='main__title'>Membership Subscription</h2>
            <p className="main__text">
                Here is the benefit of joining MOMO Kitchen Membership! <br />
                1: Get $50 Coupon once you enroll in the subrcription, without any deposit. This membership program is totally free, no annual cost. You can use this credit to purchase any product in our website, excluding tax and other service fee. <br />
                2: Get unlimited discount offers and news for MOMO Kitchen in time, so that you won't miss anything important. <br />
                3: Member referral reward. Refer to one friend, get $50 Coupon for anything. Refer to five friends, get $500 Coupon for anything! Just show the world how big power women help woman can have. <br />
                4: Make appointment with our team for professional nutrition suggestion, diet nutrition plan, baby nutrition advice etc,. You can send email or just make a visual visit for your convenience. <br />
                5: Have priority for order delivery. MOMO Kitchen would pay more attention for members' orders and try best to make delivery on time to meet the satisfaction. <br />
                6: Track the details of your orders anywhere, anytime. Be eligible to edit the order details in ahead of time without any additional deposit. We would keep you post to show order status so that you don't miss anything important for your order. <br />
                7: Win the opportunity to have the first taste of our new product. Participate in private party for fine dinning and make further exploration on postnatal meals. <br />
            </p>
            <SubscribeModal />
            <EditModal />
        </div>
    );
}

export default Subscribe;