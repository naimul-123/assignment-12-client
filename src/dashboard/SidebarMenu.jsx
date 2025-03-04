import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useMember from '../hooks/useMember';

const SidebarMenu = () => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const [isMember, isMemberLoading] = useMember();
    const menuItem = <>
        {user && isAdmin && <>
            <li><NavLink to="/dashboard/adminHome">Admin Profile</NavLink></li>
            <li><NavLink to="/dashboard/manageAgreement">Manage Agreement</NavLink></li>
            <li><NavLink to="/dashboard/manageCupon">Manage Cupon</NavLink></li>
            <li><NavLink to="/dashboard/manageMember">Manage Member</NavLink></li>
        </>}
        {user && isMember && <>
            <li><NavLink to="/dashboard/memberHome">Member Profile</NavLink></li>
            <li><NavLink to="/dashboard/makePayment">Make Payment</NavLink></li>
            <li><NavLink to="/dashboard/paymentHistory">Payment History</NavLink></li>

        </>}
        {user && !isAdmin && !isMember && <>
            <li><NavLink to="/dashboard/userHome">User Profile</NavLink></li>
            <li><NavLink to="/dashboard/announcement">Announcements</NavLink></li>

        </>}


        <li><NavLink className="bg-green-300" to="/">Home</NavLink></li>
    </>

    return (
        <div className='bg-green-200 w-48 min-h-screen'>
            <ul className='menu'>
                {menuItem}
            </ul>
        </div>
    );
};

export default SidebarMenu;