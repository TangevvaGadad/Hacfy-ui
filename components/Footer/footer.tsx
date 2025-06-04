"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterDemo() {
  return (
    <div className="">
      <footer className="px-4 py-10 sm:px-8 text-white pb-10  mx-auto border-t rounded-2xl shadow-2xl">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-2 bg-white rounded-full p-2 w-30 pl-5">
                <Image
                  src="/images/hacfy.webp"
                  alt="Left Logo"
                  width={100}
                  height={100}
                />
              </div>
              <p
                className="mt-3 text-gray-300 text-sm"
                style={{ color: "var(--primary-blue)" }}
              >
                Our mission is to build a safer digital world by offering
                end-to-end cybersecurity solutions. Whether you're a student,
                professional, startup, or enterprise, our services are tailored
                to meet your needs. From penetration testing to comprehensive
                security consulting,{" "}
              </p>
            </div>
            <div className="mx-0 lg:mx-10">
              <h3 className="font-semibold text-[var(--primary-blue)]">
                Company
              </h3>
              <ul className="mt-3 space-y-2 text-[var(--primary-blue)]">
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="/blog">Blogs</Link>
                </li>
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="/#pledge">Services</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="font-semibold"
                style={{ color: "var(--primary-blue)" }}
              >
                Contact
              </h3>
              <ul
                className="mt-3 space-y-2"
                style={{ color: "var(--primary-blue)" }}
              >
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="mailto:Hacfy@gmail.com" className="">
                    info@hacfy.com
                  </Link>
                </li>
                <li className="hover:text-primary-hover cursor-pointer">
                  <Link href="tel:+918660767853" className="">
                    +91 8660767853
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="font-semibold"
                style={{ color: "var(--primary-blue)" }}
              >
                Follow Us
              </h3>
              <div className="mt-3 flex gap-4"></div>
            </div>

            <div>
              <div className="  mt-2 md:mt-0 hover:text-[#ff8533]">
                <div>
                  <Link
                    href="/UserTerma"
                    className="hover:text-[#ff8533]"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    User Terms & Conditions
                  </Link>
                </div>
                <Link
                  href="/UserTerma"
                  className="hover:text-[#ff8533]"
                  style={{ color: "var(--primary-blue)" }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div
            className="border-t mt-8 pt-6  md:flex-row justify-between text-sm text-center items-center"
            style={{ color: "var(--primary-blue)" }}
          >
            <p>Copyright © 2025 HacFy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
