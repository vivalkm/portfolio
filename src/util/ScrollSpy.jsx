import { update, Tween, Easing } from "@tweenjs/tween.js";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Main from "../pages/Main";

export default function ScrollSpy({ sections = [], isNavigateToFirstSectionOnLoad = false }) {
    const navigate = useNavigate(),
        //used to navigate to required section on app load if section path exist in url
        [isFirstLoad, setIsFirstLoad] = useState(false),
        debounceTimeoutRef = useRef(null),
        // animation will be applied only if the user click on a menu link not on scrolling
        shouldAnimateRef = useRef(true),
        scrollDuration = 700;

    let { pathname, hash } = useLocation();
    pathname += hash;
    // return the scroll top of the given element
    const elementOffsetTop = useCallback((el) => {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop };
    }, []);

    // required function by tweenJS
    const animate = useCallback((time) => {
        requestAnimationFrame(animate);
        update(time);
    }, []);

    // animate scrolling on menu link click
    const animateScrolling = useCallback(
        (pathname) => {
            const coords = { y: window.scrollY };
            const target = document.getElementById(pathname.replace("/#", ""));
            if (target) {
                // Create a new tween that modifies 'coords'.
                new Tween(coords)
                    // Move to top of the clicked element in 700ms.
                    .to({ y: elementOffsetTop(target).top }, scrollDuration)
                    // Use an easing function to make the animation smooth.
                    .easing(Easing.Quadratic.Out)
                    .onUpdate(function () {
                        // Called after tween.js updates 'coords'.
                        // Move 'box' to the position described by 'coords' with a CSS translation.
                        window.scrollTo(0, coords.y);
                    })
                    // Start tween immediately.
                    .start();

                requestAnimationFrame(animate);
            }
        },
        [animate, elementOffsetTop]
    );

    // scroll to the given section if we paste
    // correct URL of a section in the browser
    useEffect(() => {
        if (isFirstLoad) {
            navigate(pathname, { replace: true });
            animateScrolling(pathname);
            setIsFirstLoad(false);
        }
    }, [isFirstLoad, animateScrolling, navigate, pathname]);

    const onScrollSpy = useCallback(() => {
        // get the current scroll position
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((el) => {
            const target = document.getElementById(el.id);
            // if the current section offsetTop is less than the current
            // scroll position => set the active link to the current section
            if (target.offsetTop <= Math.round(scrollPosition)) {
                // disable scroll animation while scrolling
                shouldAnimateRef.current = false;
                // push the new link
                navigate(`#${el.id}`, { replace: true });
                // re-enable scroll animation (so that we can have
                // animation if the user click on a link)
                shouldAnimateRef.current = true;
            }
        });
    }, [sections, navigate]);

    const debounceScroll = useCallback(() => {
        clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = setTimeout(onScrollSpy, 100);
    }, [onScrollSpy]);

    useEffect(() => {
        window.addEventListener("scroll", debounceScroll);

        const onLoad = () => {
            setIsFirstLoad(true);
        };

        const urlExist = new Promise((resolve) => {
            sections.forEach((el) => {
                if (el.id === pathname.replace("/#", "")) {
                    resolve(true);
                }
            });
            if (pathname === "/") {
                resolve(true);
            }
        });

        urlExist.then((value) => {
            // the following condition to make sure that we have scroll
            // animation if we paste correct URL of a section in the browser
            if (pathname !== "/#" && value) {
                window.addEventListener("load", onLoad);
            }
            //navigate to the first section of the app
            else if (pathname === "/" && isNavigateToFirstSectionOnLoad) {
                navigate(`/#${sections[0].id}`, { replace: true });
            }
        });

        return () => {
            window.removeEventListener("scroll", debounceScroll);
            window.removeEventListener("load", onLoad);
        };
    }, [sections, pathname, navigate, debounceScroll, isNavigateToFirstSectionOnLoad]);

    return (
        <>
            <Header sections={sections} animateScrolling={animateScrolling} />
            <Main sections={sections} />
        </>
    );
}
