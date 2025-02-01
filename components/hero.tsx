'use client'
import { FaArrowDown } from 'react-icons/fa'

export default function Intro() {
	return (
		<section id="home" className="relative min-h-screen w-full pt-28">
			<div className="absolute top-1/2 left-20 text-lg -translate-y-1/2 leading-8">
				<p className="overflow-hidden w-[20rem] h-[25rem]">
					<span className="inline-flex items-center -tracking-wider">
						01 // 04
						<span className="h-[1px] w-4 bg-white mx-2"></span>
						<span className="">SCROLL</span>
						<FaArrowDown className="ml-2" />
					</span>
				</p>
			</div>

			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="flex flex-col justify-center items-center text-[9rem] font-semibold leading-tight -tracking-[0.4rem]">
					<div className="inline-block -translate-x-1/4 h-32">multi-</div>

					<div className="inline-block h-32">disciplinary</div>

					<div className="relative inline-block h-32 w-[60rem] ml-12 translate-x-12">
						<div className="absolute left-0">developer</div>
						<div className="absolute left-[80%] top-6 font-medium text-xl leading-normal -tracking-[0.03rem] text-wrap w-[16rem]">
							<span className="block text-left">Transforming</span>
							<span className="block text-left">complex problems</span>
							<span className="block text-left">into simple solutions</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
