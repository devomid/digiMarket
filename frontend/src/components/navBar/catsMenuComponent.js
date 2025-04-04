import React from 'react'
import { Dropdown } from 'react-nested-dropdown';
import 'react-nested-dropdown/dist/styles.css';
import CategoryIcon from '@mui/icons-material/Category';
import { Button, IconButton, Typography } from '@mui/joy';


const items = [
    {
        label: 'شارژر',
        items: [
            {
                label: 'شارژر دیواری',
                onSelect: () => console.log('Option 2.1 selected'),
            },
            {
                label: 'شارژر رومیزی',
                onSelect: () => console.log('Option 2.2 selected'),
            },
            {
                label: 'شارژر فندکی',
                onSelect: () => console.log('Option 2.2 selected'),
            },
            {
                label: 'شارژر بیسیم',
                onSelect: () => console.log('Option 2.2 selected'),
            },
        ],
    },
    {
        label: 'کابل شارژ',
        items: [
            {
                label: 'لایتنینگ',
                onSelect: () => console.log('Option 2.1 selected'),
            },
            {
                label: 'USB-C',
                onSelect: () => console.log('Option 2.2 selected'),
            },
            {
                label: 'چند کاره',
                onSelect: () => console.log('Option 2.2 selected'),
            },
        ],
    },
    {
        label: 'نگهدارنده موبایل',
        items: [
            {
                label: 'مونوپاد و سه پایه',
                onSelect: () => console.log('Option 2.1 selected'),
            },
            {
                label: 'پایه نگهدارنده رومیزی',
                onSelect: () => console.log('Option 2.2 selected'),
            },
            {
                label: 'هولدر خودرو',
                onSelect: () => console.log('Option 2.2 selected'),
            },
        ],
    },
    {
        label: 'هاب و تبدیل',
        items: [
            {
                label: 'هاب USB',
                onSelect: () => console.log('Option 2.1 selected'),
            },
            {
                label: 'انواع تبدیل لایتنینگ',
                onSelect: () => console.log('Option 2.2 selected'),
            },
            {
                label: 'انواع تبدیل USB-C',
                onSelect: () => console.log('Option 2.2 selected'),
            },
        ],
    },
    {
        label: 'هدست و هندزفری',
        items: [
            {
                label: 'روگوشی',
                onSelect: () => console.log('Option 2.1 selected'),
            },
            {
                label: 'تو گوشی',
                onSelect: () => console.log('Option 2.2 selected'),
            },
        ],
    },
    {
        label: 'لوازم خانه و آشپزخانه',
        items: [
            {
                label: 'لوازم نظافت منزل',
                onSelect: () => console.log('Option 2.1 selected'),
            },
            {
                label: 'چراغ خواب',
                onSelect: () => console.log('Option 2.2 selected'),
            },
        ],
    },
    {
        label: 'پاور بانک',
    },
    {
        label: 'کیف و کاور و محافظ',
    },
];

const CatsMenuComponent = () => {
    return (
        <Dropdown items={items} containerWidth="200px">
            {({ isOpen, onClick }) => (
                <IconButton sx={{ cursor: 'pointer', padding: 2, border: 'none', backgroundColor: '#e4e4e4', borderRadius: '0.8rem', boxShadow: 'inset 5px 5px 5px #c4c4c4, inset -5px -5px 5px #ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '12.1vw' }} type="button" onClick={onClick}>
                    <Typography>دسته بندی کالاها</Typography>
                    <CategoryIcon />
                </IconButton>
            )}
        </Dropdown>
    )
}

export default CatsMenuComponent