import React from 'react'

export default function DescriptionMap(props) {
    const { list, type } = props

    const contentDisplay = {
        'hobbies': (obj) => <p>{obj.content}</p>,
        'work': (obj) => <p>{obj.content}</p>,
        'skills': (obj) => <p>{obj.content.join(', ')}</p>,
        'links': (obj) => <a className='text-sky-400 cursor-pointer' target='_blank' href={obj.link}>{obj.content}</a>
    }

    return (
        <div className='flex flex-col gap-3'>
            {list.map((listItem, listIndex) => {
                return (
                    <div className='relative group overflow-hidden  flex items-center gap-1.5 flex-wrap text-xs sm:text-sm' key={listIndex}>
                        <div className='bg-purple-400 duration-300 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0'></div>
                        <p><b>{listItem.name}</b></p>
                        {contentDisplay[type](listItem)}
                    </div>
                )
            })}
        </div>
    )
}
