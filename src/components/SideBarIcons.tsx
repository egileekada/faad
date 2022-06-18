import React from 'react'

export default function SideBarIcons(props: any) {
    
    return (
        <div className='w-auto' >
            {props.iconName === 'Dashboard' ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 3V9H3V3H21ZM5 5H19V7H5V5Z" fill={props.active !== 'Dashboard' ? '#ACB5BD': '#F88C3A'}/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 11V21H13V11H21ZM15 13H19V19H15V13Z" fill={props.active !== 'Dashboard' ? '#ACB5BD': '#F88C3A'}/>
                    <path d="M3 11H11V13H3V11Z" fill={props.active !== 'Dashboard' ? '#ACB5BD': '#F88C3A'} />
                    <path d="M11 15H3V17H11V15Z" fill={props.active !== 'Dashboard' ? '#ACB5BD': '#F88C3A'}/>
                    <path d="M3 19H11V21H3V19Z" fill={props.active !== 'Dashboard' ? '#ACB5BD': '#F88C3A'}/>
                </svg>
                :props.iconName === 'Bargains' ? 
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2426 0.343146C10.6332 -0.0473782 11.2663 -0.0473782 11.6568 0.343146C12.0474 0.73367 12.0474 1.36684 11.6568 1.75736L1.75735 11.6569C1.36683 12.0474 0.733665 12.0474 0.343141 11.6569C-0.0473838 11.2663 -0.0473841 10.6332 0.343141 10.2426L10.2426 0.343146Z" fill={props.active !== 'Bargains' ? '#ACB5BD': '#F88C3A'}/>
                        <path d="M3.87867 3.87868C3.09763 4.65973 1.8313 4.65973 1.05025 3.87868C0.269199 3.09763 0.269199 1.8313 1.05025 1.05025C1.8313 0.269204 3.09763 0.269204 3.87867 1.05025C4.65972 1.8313 4.65972 3.09763 3.87867 3.87868Z" fill={props.active !== 'Bargains' ? '#ACB5BD': '#F88C3A'}/>
                        <path d="M8.12132 10.9497C8.90236 11.7308 10.1687 11.7308 10.9497 10.9497C11.7308 10.1687 11.7308 8.90237 10.9497 8.12132C10.1687 7.34027 8.90236 7.34027 8.12132 8.12132C7.34027 8.90237 7.34027 10.1687 8.12132 10.9497Z" fill={props.active !== 'Bargains' ? '#ACB5BD': '#F88C3A'}/>
                    </svg>
                    :props.iconName === 'Deals' ? 
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.5C2.89543 0.5 2 1.39543 2 2.5V3.5C2 3.55666 2.00236 3.61278 2.00698 3.66825C0.838141 4.07811 0 5.19118 0 6.5V18.5C0 20.1569 1.34315 21.5 3 21.5H21C22.6569 21.5 24 20.1569 24 18.5V6.5C24 4.84315 22.6569 3.5 21 3.5H11.874C11.4299 1.77477 9.86384 0.5 8 0.5H4ZM9.73244 3.5C9.38663 2.9022 8.74028 2.5 8 2.5H4V3.5H9.73244ZM3 5.5C2.44772 5.5 2 5.94772 2 6.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V6.5C22 5.94772 21.5523 5.5 21 5.5H3Z" fill={props.active !== 'Deals' ? '#ACB5BD': '#F88C3A'}/>
                        </svg>
                        :props.iconName === 'Clientele' ?
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 12H18V14H16V12Z" fill={props.active !== 'Clientele' ? '#ACB5BD': '#F88C3A'}/>
                                <path d="M18 8H16V10H18V8Z" fill={props.active !== 'Clientele' ? '#ACB5BD': '#F88C3A'}/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4H22V18H0V0H12V4ZM7 2H10V4H7V2ZM10 16V14H7V16H10ZM10 12V10H7V12H10ZM10 8V6H7V8H10ZM20 16V6H12V8H14V10H12V12H14V14H12V16H20ZM2 16V14H5V16H2ZM2 12H5V10H2V12ZM5 8V6H2V8H5ZM2 4H5V2H2V4Z" fill={props.active !== 'Clientele' ? '#ACB5BD': '#F88C3A'}/>
                            </svg>
                            :props.iconName === 'Our people' ?
                                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C11.7909 8 10 6.20914 10 4C10 1.79086 11.7909 0 14 0C16.2091 0 18 1.79086 18 4C18 6.20914 16.2091 8 14 8ZM14 6C12.8954 6 12 5.10457 12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6Z" fill={props.active !== 'Our people' ? '#ACB5BD': '#F88C3A'}/>
                                    <path d="M10 11C9.44772 11 9 11.4477 9 12V18H7V12C7 10.3431 8.34315 9 10 9H18C19.6569 9 21 10.3431 21 12V18H19V12C19 11.4477 18.5523 11 18 11H10Z" fill={props.active !== 'Our people' ? '#ACB5BD': '#F88C3A'} />
                                    <path d="M0 8H6V10H0V8Z" fill={props.active !== 'Our people' ? '#ACB5BD': '#F88C3A'}/>
                                    <path d="M5 12H0V14H5V12Z" fill={props.active !== 'Our people' ? '#ACB5BD': '#F88C3A'}/>
                                    <path d="M0 4H7V6H0V4Z" fill={props.active !== 'Our people' ? '#ACB5BD': '#F88C3A'}/>
                                </svg>
                                :props.iconName === 'Activities' ?
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0C8.44772 0 8 0.447715 8 1C8 1.55228 8.44772 2 9 2H17C17.5523 2 18 1.55228 18 1C18 0.447715 17.5523 0 17 0H9Z" fill={props.active !== 'Activities' ? '#ACB5BD': '#F88C3A'}/>
                                        <path d="M4 7C4 6.44771 4.44772 6 5 6H13C13.5523 6 14 6.44771 14 7C14 7.55228 13.5523 8 13 8H5C4.44772 8 4 7.55228 4 7Z" fill={props.active !== 'Activities' ? '#ACB5BD': '#F88C3A'}/>
                                        <path d="M0 13C0 12.4477 0.447715 12 1 12H9C9.55228 12 10 12.4477 10 13C10 13.5523 9.55229 14 9 14H1C0.447716 14 0 13.5523 0 13Z" fill={props.active !== 'Activities' ? '#ACB5BD': '#F88C3A'}/>
                                    </svg> 
                                    :props.iconName === 'Customer Service' ?
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18.5C0 18.7761 0.223858 19 0.5 19H0.792893C0.925501 19 1.05268 18.9473 1.14645 18.8536L4.85355 15.1464C4.94732 15.0527 5.0745 15 5.20711 15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM18 13H4.20711C4.0745 13 3.94732 13.0527 3.85355 13.1464L2.85355 14.1464C2.53857 14.4614 2 14.2383 2 13.7929V2.5C2 2.22386 2.22386 2 2.5 2H18" fill={props.active !== 'Customer Service' ? '#ACB5BD': '#F88C3A'}/>
                                        </svg>
                                        :props.iconName === 'Operations' ?
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18.5C0 18.7761 0.223858 19 0.5 19H0.792893C0.925501 19 1.05268 18.9473 1.14645 18.8536L4.85355 15.1464C4.94732 15.0527 5.0745 15 5.20711 15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM18 13H4.20711C4.0745 13 3.94732 13.0527 3.85355 13.1464L2.85355 14.1464C2.53857 14.4614 2 14.2383 2 13.7929V2.5C2 2.22386 2.22386 2 2.5 2H18" fill={props.active !== 'Operations' ? '#ACB5BD': '#F88C3A'}/>
                                            </svg>
                                            :props.iconName === 'Account' ?
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18.5C0 18.7761 0.223858 19 0.5 19H0.792893C0.925501 19 1.05268 18.9473 1.14645 18.8536L4.85355 15.1464C4.94732 15.0527 5.0745 15 5.20711 15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM18 13H4.20711C4.0745 13 3.94732 13.0527 3.85355 13.1464L2.85355 14.1464C2.53857 14.4614 2 14.2383 2 13.7929V2.5C2 2.22386 2.22386 2 2.5 2H18" fill={props.active !== 'Account' ? '#ACB5BD': '#F88C3A'}/>
                                                </svg>
                                                :props.iconName === 'General' ?
                                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H2C0.9 0 0 0.9 0 2V17.7929C0 18.2383 0.538571 18.4614 0.853553 18.1464L3.85355 15.1464C3.94732 15.0527 4.0745 15 4.20711 15H18C19.1 15 20 14.1 20 13V2C20 0.9 19.1 0 18 0Z" fill={props.active !== 'General' ? '#ACB5BD': '#F88C3A'}/>
                                                    </svg>
                                                    :props.iconName === 'My Notes' ?
                                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 5C4 4.44772 4.44772 4 5 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H5C4.44771 6 4 5.55228 4 5Z" fill={props.active !== 'My Notes' ? '#ACB5BD': '#F88C3A'}/>
                                                            <path d="M4 9C4 8.44771 4.44772 8 5 8H15C15.5523 8 16 8.44771 16 9C16 9.55229 15.5523 10 15 10H5C4.44771 10 4 9.55229 4 9Z" fill={props.active !== 'My Notes' ? '#ACB5BD': '#F88C3A'}/>
                                                            <path d="M5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44771 14 5 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H5Z" fill={props.active !== 'My Notes' ? '#ACB5BD': '#F88C3A'}/>
                                                            <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H5C4.44772 18 4 17.5523 4 17Z" fill={props.active !== 'My Notes' ? '#ACB5BD': '#F88C3A'}/>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V3ZM3 2H17C17.5523 2 18 2.44771 18 3V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V3C2 2.44772 2.44771 2 3 2Z" fill={props.active !== 'My Notes' ? '#ACB5BD': '#F88C3A'}/>
                                                        </svg> 
                                                        :props.iconName === 'Lock' ?
                                                            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.5C16.6569 9.5 18 10.8431 18 12.5V18.5C18 20.1569 16.6569 21.5 15 21.5H3C1.34315 21.5 0 20.1569 0 18.5V12.5C0 10.8431 1.34315 9.5 3 9.5V6.5C3 3.18629 5.68629 0.5 9 0.5C12.3137 0.5 15 3.18629 15 6.5V9.5ZM9 2.5C11.2091 2.5 13 4.29086 13 6.5V9.5H5V6.5C5 4.29086 6.79086 2.5 9 2.5ZM15 11.5H3C2.44772 11.5 2 11.9477 2 12.5V18.5C2 19.0523 2.44772 19.5 3 19.5H15C15.5523 19.5 16 19.0523 16 18.5V12.5C16 11.9477 15.5523 11.5 15 11.5Z" fill={props.active !== 'Lock' ? '#ACB5BD': '#F88C3A'}/>
                                                            </svg> 
                                                            :props.iconName === 'Log out' ?
                                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.99998 1.00881C9.00019 0.45653 8.55265 0.00863925 8.00037 0.00842293C7.44808 0.00820698 7.00019 0.455747 6.99997 1.00803L6.99684 9.01148C6.99663 9.56376 7.44417 10.0117 7.99645 10.0119C8.54874 10.0121 8.99663 9.56455 8.99684 9.01226L8.99998 1.00881Z" fill="#EC0000"/>
                                                                    <path d="M0 9.99156C0 7.78245 0.895405 5.78247 2.34308 4.33476L3.7573 5.74898C2.67155 6.83476 2 8.33473 2 9.99156C2 13.3053 4.68629 15.9916 8 15.9916C11.3137 15.9916 14 13.3053 14 9.99156C14 8.3347 13.3284 6.83469 12.2426 5.74891L13.6568 4.33469C15.1046 5.78241 16 7.78241 16 9.99156C16 14.4098 12.4183 17.9916 8 17.9916C3.58172 17.9916 0 14.4098 0 9.99156Z" fill="#EC0000"/>
                                                                </svg>
                                                                :props.iconName === 'Accounts' ?
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M17 5H7V7H17V5Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path d="M7 9H9V11H7V9Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path d="M9 13H7V15H9V13Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path d="M7 17H9V19H7V17Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path d="M13 9H11V11H13V9Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path d="M11 13H13V15H11V13Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path d="M13 17H11V19H13V17Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path d="M15 9H17V11H15V9Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path d="M17 13H15V19H17V13Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z" fill={props.active !== 'Accounts' ? '#ACB5BD': '#F88C3A'}/>
                                                                    </svg>
                                                                    :props.iconName === 'Report' ?
                                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.775 7C21.9242 7.65461 22 8.32542 22 9H13V0C13.6746 0 14.3454 0.0758356 15 0.225036C15.4923 0.337242 15.9754 0.490942 16.4442 0.685084C17.5361 1.13738 18.5282 1.80031 19.364 2.63604C20.1997 3.47177 20.8626 4.46392 21.3149 5.55585C21.5091 6.02455 21.6628 6.5077 21.775 7ZM19.7082 7C19.6397 6.77018 19.5593 6.54361 19.4672 6.32122C19.1154 5.47194 18.5998 4.70026 17.9497 4.05025C17.2997 3.40024 16.5281 2.88463 15.6788 2.53284C15.4564 2.44073 15.2298 2.36031 15 2.2918V7H19.7082Z" fill={props.active !== 'Report' ? '#ACB5BD': '#F88C3A'}/>
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 8.02944 4.02944 4 9 4C9.67458 4 10.3454 4.07584 11 4.22504V11H17.775C17.9242 11.6546 18 12.3254 18 13C18 17.9706 13.9706 22 9 22C4.02944 22 0 17.9706 0 13ZM15.8035 13H9V6.19648C5.24252 6.19648 2.19648 9.24252 2.19648 13C2.19648 16.7575 5.24252 19.8035 9 19.8035C12.7575 19.8035 15.8035 16.7575 15.8035 13Z" fill={props.active !== 'Report' ? '#ACB5BD': '#F88C3A'}/>
                                                                        </svg>                            
            :null}
        </div>
    )
} 