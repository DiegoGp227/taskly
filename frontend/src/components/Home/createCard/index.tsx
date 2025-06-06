import Style from './style.module.css'

const CreateCard = () => {
    return (
        <section className={Style.sec_add}>
            <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_37_47)">
                    <path d="M44 36H60V44H44V60H36V44H20V36H36V20H44V36ZM40 80C29.3913 80 19.2172 75.7857 11.7157 68.2843C4.21427 60.7828 0 50.6087 0 40C0 29.3913 4.21427 19.2172 11.7157 11.7157C19.2172 4.21427 29.3913 0 40 0C50.6087 0 60.7828 4.21427 68.2843 11.7157C75.7857 19.2172 80 29.3913 80 40C80 50.6087 75.7857 60.7828 68.2843 68.2843C60.7828 75.7857 50.6087 80 40 80ZM40 72C48.4869 72 56.6263 68.6286 62.6274 62.6274C68.6286 56.6263 72 48.4869 72 40C72 31.5131 68.6286 23.3737 62.6274 17.3726C56.6263 11.3714 48.4869 8 40 8C31.5131 8 23.3737 11.3714 17.3726 17.3726C11.3714 23.3737 8 31.5131 8 40C8 48.4869 11.3714 56.6263 17.3726 62.6274C23.3737 68.6286 31.5131 72 40 72Z" fill="#78F97E" />
                </g>
                <defs>
                    <clipPath id="clip0_37_47">
                        <rect width="80" height="80" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </section>
    )
}

export default CreateCard