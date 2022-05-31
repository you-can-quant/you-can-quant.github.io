function Header() {
    let style = {
        "height": "350px",
        "background-position": '50%',
        "background-image": "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1638913971873-bcef634bdcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
    }
    return (
        <header>
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div class="container-fluid flex">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
            class="w-8 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
            </path>
          </svg>
            <a class="text-2xl text-black font-semibold" href="#">QuanT</a>
            </div>
        </div>
        </nav>

        <div class="text-center bg-gray-50 py-20 px-6 relative overflow-hidden bg-no-repeat bg-cover" style={style}>
            <h1 class="pt-6 text-white text-5xl font-bold mt-10 mb-2">할 수 있다! 퀀트 투자</h1>
            
            <div class="flex space-x-2 justify-center">
                <button type="button" class="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-bold text-md rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    <a href="https://forms.gle/sCNy9Fs5DYoM8s689">3초 안에 베타테스트 신청하기 클릭!</a>
                </button>
            </div>
        </div>

        </header>
    )
}

export default Header;