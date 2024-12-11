import { IoMailOutline } from 'react-icons/io5'

export default function HeadOfFooter() {
  return (
    <div className="max-w-310 translate-y-1/2 left-0 right-0 mx-auto">
				<div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-24 bg-black rounded-3xl p-16 grid grid-cols-2 gap-7 max-lg:grid-cols-1">
					<div className="col-span-1 text-white sm:text-3xl text-lg font-black ">
						<p className="text-center">
							STAY UPTO DATE ABOUT OUR LATEST OFFERS
						</p>
					</div>
					<div className="col-span-1">
						<form action="" className="flex gap-5 flex-col">
							<div className="flex bg-white rounded-full justify-center items-center px-5 w-full">
								<button className=''>
                                    <IoMailOutline />
                                </button>
								<input
									className="outline-0 shrink-0 rounded-full w-full bg-white py-1.5 px-3"
									type="text"
									placeholder="Enter Your E-mail"
								/>
							</div>
							<button className="bg-white py-1.5 rounded-full w-full max-sm:text-sm">
								Subscribe to Newsletter
							</button>
						</form>
					</div>
				</div>
			</div>
  )
}
