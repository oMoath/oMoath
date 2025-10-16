(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    1791: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 3888))
    }
    ,
    3888: (e, t, a) => {
        "use strict";
        a.r(t),
        a.d(t, {
            default: () => w
        });
        var l = a(5155)
          , s = a(2115)
          , i = a(8274)
          , r = a(6766);
        function c(e) {
            let {product: t, onClick: a} = e;
            return (0,
            l.jsx)(i.P.div, {
                whileHover: {
                    scale: 1.03,
                    y: -5
                },
                whileTap: {
                    scale: .98
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                },
                className: "cursor-pointer",
                onClick: a,
                children: (0,
                l.jsxs)("div", {
                    className: "kokonut-card overflow-hidden h-full transition-all duration-300",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "relative aspect-square overflow-hidden bg-[#0e0e11]",
                        children: [(0,
                        l.jsx)(r.default, {
                            src: null,
                            alt: t.name,
                            fill: !0,
                            className: "object-cover transition-transform hover:scale-110 duration-500"
                        }), t.badge && (0,
                        l.jsx)("div", {
                            className: "absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold",
                            children: t.badge
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "p-5",
                        children: [(0,
                        l.jsx)("h3", {
                            className: "font-semibold text-lg mb-2 line-clamp-1 text-foreground",
                            children: t.name
                        }), (0,
                        l.jsx)("p", {
                            className: "text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed",
                            children: t.description
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [t.originalPrice && (0,
                            l.jsxs)("span", {
                                className: "text-sm text-muted-foreground line-through",
                                children: ["$", t.originalPrice]
                            }), (0,
                            l.jsxs)("span", {
                                className: "text-2xl font-bold text-primary",
                                children: ["$", t.price]
                            })]
                        })]
                    })]
                })
            })
        }
        var n = a(9114)
          , o = a(4416)
          , x = a(7809);
        function d(e) {
            let {product: t, isOpen: a, onClose: s, onAddToCart: c} = e;
            return t ? (0,
            l.jsx)(n.N, {
                children: a && (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsx)(i.P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        onClick: s,
                        className: "fixed inset-0 bg-black/70 backdrop-blur-md z-50"
                    }), (0,
                    l.jsx)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                        children: (0,
                        l.jsx)(i.P.div, {
                            initial: {
                                scale: .8,
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                scale: .8,
                                opacity: 0,
                                y: 50
                            },
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            },
                            className: "kokonut-card max-w-4xl w-full max-h-[90vh] overflow-hidden",
                            children: (0,
                            l.jsxs)("div", {
                                className: "relative",
                                children: [(0,
                                l.jsx)("button", {
                                    className: "absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center bg-card-dark/80 backdrop-blur-sm hover:bg-card-dark transition-colors",
                                    onClick: s,
                                    style: {
                                        clipPath: "polygon(3px 3px, 3px 0px, calc(100% - 3px) 0px, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0px calc(100% - 3px), 0px 3px)"
                                    },
                                    children: (0,
                                    l.jsx)(o.A, {
                                        className: "h-5 w-5 text-foreground"
                                    })
                                }), (0,
                                l.jsxs)("div", {
                                    className: "grid md:grid-cols-2 gap-6 p-6 max-h-[90vh] overflow-y-auto",
                                    children: [(0,
                                    l.jsxs)("div", {
                                        className: "relative aspect-square overflow-hidden bg-[#0e0e11]",
                                        style: {
                                            clipPath: "polygon(5px 5px, 5px 0px, calc(100% - 5px) 0px, calc(100% - 5px) 5px, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 5px calc(100% - 5px), 0px calc(100% - 5px), 0px 5px)"
                                        },
                                        children: [(0,
                                        l.jsx)(r.default, {
                                            src: null,
                                            alt: t.name,
                                            fill: !0,
                                            className: "object-cover"
                                        }), t.badge && (0,
                                        l.jsx)("div", {
                                            className: "absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold",
                                            children: t.badge
                                        })]
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0,
                                        l.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0,
                                            l.jsx)("h2", {
                                                className: "text-3xl font-bold mb-4 text-balance text-foreground",
                                                children: t.name
                                            }), (0,
                                            l.jsxs)("div", {
                                                className: "flex flex-col gap-1 mb-6",
                                                children: [t.originalPrice && (0,
                                                l.jsxs)("span", {
                                                    className: "text-lg text-muted-foreground line-through",
                                                    children: ["$", t.originalPrice]
                                                }), (0,
                                                l.jsxs)("span", {
                                                    className: "text-4xl font-bold text-primary",
                                                    children: ["$", t.price]
                                                })]
                                            }), (0,
                                            l.jsxs)("div", {
                                                className: "space-y-4 mb-6",
                                                children: [(0,
                                                l.jsxs)("div", {
                                                    children: [(0,
                                                    l.jsx)("h3", {
                                                        className: "font-semibold mb-2 text-foreground",
                                                        children: "Description"
                                                    }), (0,
                                                    l.jsx)("p", {
                                                        className: "text-muted-foreground text-pretty leading-relaxed",
                                                        children: t.description
                                                    })]
                                                }), t.features && (0,
                                                l.jsxs)("div", {
                                                    children: [(0,
                                                    l.jsx)("h3", {
                                                        className: "font-semibold mb-2 text-foreground",
                                                        children: "Features"
                                                    }), (0,
                                                    l.jsx)("ul", {
                                                        className: "space-y-2",
                                                        children: t.features.map( (e, t) => (0,
                                                        l.jsxs)("li", {
                                                            className: "flex items-start gap-2 text-sm text-muted-foreground",
                                                            children: [(0,
                                                            l.jsx)("span", {
                                                                className: "text-primary mt-1 font-bold",
                                                                children: "✓"
                                                            }), (0,
                                                            l.jsx)("span", {
                                                                children: e
                                                            })]
                                                        }, t))
                                                    })]
                                                })]
                                            })]
                                        }), (0,
                                        l.jsxs)("div", {
                                            className: "flex gap-3",
                                            children: [(0,
                                            l.jsxs)("button", {
                                                className: "kokonut-button flex-1 flex items-center justify-center gap-2",
                                                onClick: () => {
                                                    c(t),
                                                    s()
                                                }
                                                ,
                                                children: [(0,
                                                l.jsx)(x.A, {
                                                    className: "h-5 w-5"
                                                }), "Add to Cart"]
                                            }), (0,
                                            l.jsx)("button", {
                                                className: "px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 font-medium",
                                                onClick: s,
                                                style: {
                                                    clipPath: "polygon(5px 5px, 5px 0px, calc(100% - 5px) 0px, calc(100% - 5px) 5px, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 5px calc(100% - 5px), 0px calc(100% - 5px), 0px 5px)"
                                                },
                                                children: "Cancel"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }) : null
        }
        var p = a(7712)
          , m = a(4616)
          , u = a(2525)
          , h = a(6874)
          , g = a.n(h);
        function f(e) {
            let {isOpen: t, onClose: a, items: s, onUpdateQuantity: c, onRemove: x} = e
              , d = s.reduce( (e, t) => e + t.price * t.quantity, 0);
            return (0,
            l.jsx)(n.N, {
                children: t && (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsx)(i.P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        onClick: a,
                        className: "fixed inset-0 bg-black/70 backdrop-blur-md z-50"
                    }), (0,
                    l.jsxs)(i.P.div, {
                        initial: {
                            x: "-100%"
                        },
                        animate: {
                            x: 0
                        },
                        exit: {
                            x: "-100%"
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        },
                        className: "fixed left-0 top-0 h-full w-full max-w-md bg-card shadow-2xl z-50 flex flex-col",
                        style: {
                            clipPath: "polygon(5px 5px, 5px 0px, calc(100% - 5px) 0px, calc(100% - 5px) 5px, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 5px calc(100% - 5px), 0px calc(100% - 5px), 0px 5px)"
                        },
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex items-center justify-between p-6 border-b border-border",
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Shopping Cart"
                            }), (0,
                            l.jsx)("button", {
                                className: "w-10 h-10 flex items-center justify-center hover:bg-accent transition-colors",
                                onClick: a,
                                style: {
                                    clipPath: "polygon(3px 3px, 3px 0px, calc(100% - 3px) 0px, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0px calc(100% - 3px), 0px 3px)"
                                },
                                children: (0,
                                l.jsx)(o.A, {
                                    className: "h-5 w-5"
                                })
                            })]
                        }), (0,
                        l.jsx)("div", {
                            className: "flex-1 overflow-y-auto p-6",
                            children: 0 === s.length ? (0,
                            l.jsxs)("div", {
                                className: "flex flex-col items-center justify-center h-full text-center",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-4",
                                    children: (0,
                                    l.jsx)("span", {
                                        className: "text-4xl",
                                        children: "\uD83D\uDED2"
                                    })
                                }), (0,
                                l.jsx)("p", {
                                    className: "text-lg font-medium mb-2 text-foreground",
                                    children: "Your cart is empty"
                                }), (0,
                                l.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Start adding products to your cart"
                                })]
                            }) : (0,
                            l.jsx)("div", {
                                className: "space-y-4",
                                children: s.map(e => (0,
                                l.jsxs)(i.P.div, {
                                    layout: !0,
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    className: "flex gap-4 p-4 bg-card-dark",
                                    style: {
                                        clipPath: "polygon(5px 5px, 5px 0px, calc(100% - 5px) 0px, calc(100% - 5px) 5px, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 5px calc(100% - 5px), 0px calc(100% - 5px), 0px 5px)"
                                    },
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "relative w-20 h-20 overflow-hidden bg-[#0e0e11] flex-shrink-0",
                                        style: {
                                            clipPath: "polygon(3px 3px, 3px 0px, calc(100% - 3px) 0px, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0px calc(100% - 3px), 0px 3px)"
                                        },
                                        children: (0,
                                        l.jsx)(r.default, {
                                            src: null,
                                            alt: e.name,
                                            fill: !0,
                                            className: "object-cover"
                                        })
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [(0,
                                        l.jsx)("h3", {
                                            className: "font-semibold mb-1 line-clamp-1 text-foreground",
                                            children: e.name
                                        }), (0,
                                        l.jsxs)("p", {
                                            className: "text-sm text-primary font-bold mb-2",
                                            children: ["$", e.price]
                                        }), (0,
                                        l.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0,
                                            l.jsx)("button", {
                                                className: "h-8 w-8 flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors",
                                                onClick: () => c(e.id, e.quantity - 1),
                                                style: {
                                                    clipPath: "polygon(3px 3px, 3px 0px, calc(100% - 3px) 0px, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0px calc(100% - 3px), 0px 3px)"
                                                },
                                                children: (0,
                                                l.jsx)(p.A, {
                                                    className: "h-3 w-3"
                                                })
                                            }), (0,
                                            l.jsx)("span", {
                                                className: "w-8 text-center font-medium text-foreground",
                                                children: e.quantity
                                            }), (0,
                                            l.jsx)("button", {
                                                className: "h-8 w-8 flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors",
                                                onClick: () => c(e.id, e.quantity + 1),
                                                style: {
                                                    clipPath: "polygon(3px 3px, 3px 0px, calc(100% - 3px) 0px, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0px calc(100% - 3px), 0px 3px)"
                                                },
                                                children: (0,
                                                l.jsx)(m.A, {
                                                    className: "h-3 w-3"
                                                })
                                            })]
                                        })]
                                    }), (0,
                                    l.jsx)("button", {
                                        className: "flex-shrink-0 w-10 h-10 flex items-center justify-center hover:bg-accent transition-colors",
                                        onClick: () => x(e.id),
                                        style: {
                                            clipPath: "polygon(3px 3px, 3px 0px, calc(100% - 3px) 0px, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0px calc(100% - 3px), 0px 3px)"
                                        },
                                        children: (0,
                                        l.jsx)(u.A, {
                                            className: "h-4 w-4 text-destructive"
                                        })
                                    })]
                                }, e.id))
                            })
                        }), s.length > 0 && (0,
                        l.jsxs)("div", {
                            className: "border-t border-border p-6 space-y-4",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "flex items-center justify-between text-lg",
                                children: [(0,
                                l.jsx)("span", {
                                    className: "font-medium text-foreground",
                                    children: "Total:"
                                }), (0,
                                l.jsxs)("span", {
                                    className: "font-bold text-2xl text-primary",
                                    children: ["$", d.toFixed(2)]
                                })]
                            }), (0,
                            l.jsx)(g(), {
                                href: "/checkout",
                                onClick: a,
                                children: (0,
                                l.jsx)("button", {
                                    className: "kokonut-button w-full text-center",
                                    children: "Proceed to Checkout"
                                })
                            })]
                        })]
                    })]
                })
            })
        }
        let j = ["All", "Ranks", "Guilds", "Pets", "Aether"];
        function y(e) {
            let {selectedCategory: t, onSelectCategory: a} = e;
            return (0,
            l.jsx)("div", {
                className: "flex flex-wrap gap-3 justify-center mb-12",
                children: j.map(e => (0,
                l.jsx)("button", {
                    onClick: () => a(e),
                    className: "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ".concat(t === e ? "kokonut-button" : "bg-[#1a1a1a] text-white border-2 border-[#2a2a2a] hover:border-[#FFC30E]"),
                    children: e
                }, e))
            })
        }
        let b = [{
            id: "1",
            name: "VIP Rank",
            description: "Unlock exclusive VIP features and stand out from the crowd with special perks",
            price: 9.99,
            originalPrice: 14.99,
            image: null,
            badge: "30% OFF",
            rating: 4.9,
            reviews: 1234,
            category: "Ranks",
            features: ["Exclusive VIP tag", "Priority server access", "Special chat colors", "Custom join messages", "Access to VIP lounge"]
        }, {
            id: "2",
            name: "MVP Rank",
            description: "The ultimate rank with all premium features and exclusive benefits",
            price: 19.99,
            originalPrice: 29.99,
            image: null,
            badge: "BEST SELLER",
            rating: 5,
            reviews: 2567,
            category: "Ranks",
            features: ["All VIP features included", "Rainbow name colors", "Exclusive cosmetics", "Double XP boost", "Priority support"]
        }, {
            id: "3",
            name: "Elite Guild",
            description: "Create your own elite guild with advanced management tools",
            price: 24.99,
            image: null,
            rating: 4.8,
            reviews: 892,
            category: "Guilds",
            features: ["Up to 50 guild members", "Custom guild banner", "Guild chat channel", "Guild vault access", "Guild leaderboards"]
        }, {
            id: "4",
            name: "Legendary Guild",
            description: "The most powerful guild tier with unlimited possibilities",
            price: 49.99,
            image: null,
            badge: "NEW",
            rating: 4.9,
            reviews: 456,
            category: "Guilds",
            features: ["Unlimited guild members", "Animated guild banner", "Private guild island", "Guild wars access", "Custom guild perks"]
        }, {
            id: "5",
            name: "Dragon Pet",
            description: "A majestic dragon companion with fire-breathing abilities",
            price: 14.99,
            image: null,
            rating: 4.7,
            reviews: 1567,
            category: "Pets",
            features: ["Fire breath attack", "Flying mount ability", "Auto-collect items", "Grows with you", "Unique animations"]
        }, {
            id: "6",
            name: "Phoenix Pet",
            description: "A legendary phoenix that resurrects and grants special powers",
            price: 19.99,
            originalPrice: 24.99,
            image: null,
            badge: "FEATURED",
            rating: 4.9,
            reviews: 2103,
            category: "Pets",
            features: ["Auto-resurrection ability", "Healing aura", "Flame trail effect", "Rare drop boost", "Legendary animations"]
        }, {
            id: "7",
            name: "Aether Wings",
            description: "Mystical wings that grant you the power of flight",
            price: 12.99,
            image: null,
            rating: 4.8,
            reviews: 1876,
            category: "Aether",
            features: ["Unlimited flight", "Particle effects", "Speed boost", "Customizable colors", "Smooth animations"]
        }, {
            id: "8",
            name: "Aether Armor Set",
            description: "Complete armor set infused with ethereal energy",
            price: 34.99,
            image: null,
            badge: "PREMIUM",
            rating: 5,
            reviews: 987,
            category: "Aether",
            features: ["Full armor protection", "Glowing particle effects", "Special abilities", "Damage reduction", "Unique visual effects"]
        }, {
            id: "9",
            name: "Shadow Wolf Pet",
            description: "A mysterious shadow wolf with stealth abilities",
            price: 16.99,
            image: null,
            rating: 4.6,
            reviews: 1234,
            category: "Pets",
            features: ["Stealth mode", "Night vision", "Speed boost", "Howl ability", "Shadow trail effect"]
        }, {
            id: "10",
            name: "Aether Portal",
            description: "Personal teleportation portal to travel instantly",
            price: 29.99,
            image: null,
            rating: 4.9,
            reviews: 756,
            category: "Aether",
            features: ["Instant teleportation", "Save multiple locations", "Animated portal effect", "No cooldown", "Share with friends"]
        }, {
            id: "11",
            name: "Champion Rank",
            description: "Elite champion status with exclusive tournament access",
            price: 39.99,
            image: null,
            badge: "LIMITED",
            rating: 4.8,
            reviews: 543,
            category: "Ranks",
            features: ["All MVP features", "Tournament access", "Exclusive emotes", "Triple XP boost", "Champion crown"]
        }, {
            id: "12",
            name: "Starter Guild",
            description: "Perfect for new guild leaders starting their journey",
            price: 9.99,
            image: null,
            rating: 4.5,
            reviews: 1432,
            category: "Guilds",
            features: ["Up to 20 members", "Basic guild features", "Guild chat", "Shared storage", "Guild quests"]
        }];
        var v = a(5430);
        function w() {
            let[e,t] = (0,
            s.useState)(null)
              , [a,i] = (0,
            s.useState)([])
              , [r,n] = (0,
            s.useState)(!1)
              , [o,x] = (0,
            s.useState)("All")
              , p = e => {
                i(t => t.filter(t => t.id !== e))
            }
              , m = a.reduce( (e, t) => e + t.quantity, 0)
              , u = "All" === o ? b : b.filter(e => e.category === o);
            return (0,
            l.jsxs)("div", {
                className: "min-h-screen flex flex-col",
                children: [(0,
                l.jsx)(v.A, {}), (0,
                l.jsx)("div", {
                    className: "circle-container",
                    children: (0,
                    l.jsx)("div", {
                        className: "circle"
                    })
                }), (0,
                l.jsxs)("main", {
                    className: "flex-1 container mx-auto px-4 py-24 relative z-10",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "mb-12 text-center",
                        children: [(0,
                        l.jsx)("h1", {
                            className: "text-4xl md:text-5xl font-bold mb-4 text-balance",
                            children: "Premium Store"
                        }), (0,
                        l.jsx)("p", {
                            className: "text-lg text-muted-foreground text-pretty",
                            children: "Discover our exclusive products and enhance your experience"
                        })]
                    }), (0,
                    l.jsx)(y, {
                        selectedCategory: o,
                        onSelectCategory: x
                    }), (0,
                    l.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                        children: u.map( (e, a) => (0,
                        l.jsx)("div", {
                            className: "animate-in fade-in slide-in-from-bottom-4",
                            style: {
                                animationDelay: "".concat(50 * a, "ms"),
                                animationFillMode: "backwards"
                            },
                            children: (0,
                            l.jsx)(c, {
                                product: e,
                                onClick: () => t(e)
                            })
                        }, e.id))
                    }), 0 === u.length && (0,
                    l.jsx)("div", {
                        className: "text-center py-12",
                        children: (0,
                        l.jsx)("p", {
                            className: "text-xl text-muted-foreground",
                            children: "No products found in this category"
                        })
                    })]
                }), (0,
                l.jsx)(d, {
                    product: e,
                    isOpen: !!e,
                    onClose: () => t(null),
                    onAddToCart: e => {
                        i(t => t.find(t => t.id === e.id) ? t.map(t => t.id === e.id ? {
                            ...t,
                            quantity: t.quantity + 1
                        } : t) : [...t, {
                            ...e,
                            quantity: 1
                        }])
                    }
                }), (0,
                l.jsx)(f, {
                    isOpen: r,
                    onClose: () => n(!1),
                    items: a,
                    onUpdateQuantity: (e, t) => {
                        if (t <= 0) {
                            p(e);
                            return
                        }
                        i(a => a.map(a => a.id === e ? {
                            ...a,
                            quantity: t
                        } : a))
                    }
                    ,
                    onRemove: p,
                    cartItemsCount: m
                }), (0,
                l.jsxs)("div", {
                    className: "fixed bottom-8 left-8 flex flex-col gap-3 z-40",
                    children: [(0,
                    l.jsxs)("button", {
                        onClick: () => n(!0),
                        className: "kokonut-button flex items-center gap-2",
                        children: [(0,
                        l.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [(0,
                            l.jsx)("circle", {
                                cx: "8",
                                cy: "21",
                                r: "1"
                            }), (0,
                            l.jsx)("circle", {
                                cx: "19",
                                cy: "21",
                                r: "1"
                            }), (0,
                            l.jsx)("path", {
                                d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                            })]
                        }), "Cart (", m, ")"]
                    }), a.length > 0 && (0,
                    l.jsxs)(g(), {
                        href: "/checkout",
                        className: "kokonut-button flex items-center gap-2 justify-center",
                        children: [(0,
                        l.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [(0,
                            l.jsx)("rect", {
                                width: "20",
                                height: "14",
                                x: "2",
                                y: "5",
                                rx: "2"
                            }), (0,
                            l.jsx)("line", {
                                x1: "2",
                                x2: "22",
                                y1: "10",
                                y2: "10"
                            })]
                        }), "Checkout"]
                    })]
                })]
            })
        }
    }
    ,
    5430: (e, t, a) => {
        "use strict";
        a.d(t, {
            A: () => f
        });
        var l = a(5155)
          , s = a(2115)
          , i = a(6766)
          , r = a(6874)
          , c = a.n(r)
          , n = a(6474)
          , o = a(7924)
          , x = a(1007)
          , d = a(3861)
          , p = a(7809)
          , m = a(5868)
          , u = a(4869)
          , h = a(381)
          , g = a(4835);
        function f() {
            let[e,t] = (0,
            s.useState)(!1)
              , [a,r] = (0,
            s.useState)(!1)
              , [f,j] = (0,
            s.useState)("")
              , [y,b] = (0,
            s.useState)(!1)
              , [v,w] = (0,
            s.useState)("")
              , [N,k] = (0,
            s.useState)("Unknown")
              , [P,C] = (0,
            s.useState)("player");
            return (0,
            s.useEffect)( () => {
                (async () => {
                    try {
                        let e = localStorage.getItem("uuid")
                          , t = localStorage.getItem("name");
                        if (e && t) {
                            b(!0),
                            w(t);
                            let a = await fetch("/api/rank/".concat(e));
                            if (a.ok) {
                                let e = await a.json();
                                k(e.rank)
                            }
                        }
                    } catch (e) {
                        console.error("Error fetching player rank:", e)
                    }
                }
                )()
            }
            , []),
            (0,
            l.jsx)("nav", {
                className: "fixed top-0 right-0 w-full bg-gradient-to-b from-[#0d0d0d]/90 to-transparent text-white py-4 px-6 backdrop-blur-md shadow-md z-50 pad-10",
                children: (0,
                l.jsxs)("div", {
                    className: "max-w-6xl mx-auto flex justify-between items-center relative",
                    children: [(0,
                    l.jsx)("ul", {
                        className: "flex gap-6 text-sm font-medium",
                        children: (0,
                        l.jsx)("li", {
                            children: (0,
                            l.jsx)(c(), {
                                href: "/",
                                className: "hover:text-yellow-400",
                                children: "Home"
                            })
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "absolute left-1/2 transform -translate-x-1/2",
                        children: (0,
                        l.jsx)(i.default, {
                            src: null,
                            alt: "Logo",
                            width: 50,
                            height: 50
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "flex items-center gap-2 text-sm flex-row-reverse",
                        children: y ? (0,
                        l.jsxs)(l.Fragment, {
                            children: [(0,
                            l.jsx)("div", {
                                className: "relative w-10 h-10 rounded overflow-hidden",
                                children: (0,
                                l.jsx)("img", {
                                    src: null,
                                    alt: v,
                                    className: "w-full h-full object-cover",
                                    onError: e => e.currentTarget.src = "/default-head.png"
                                })
                            }), (0,
                            l.jsxs)("div", {
                                className: "flex flex-col justify-center leading-tight text-right",
                                children: [(0,
                                l.jsx)("span", {
                                    className: "font-semibold text-white",
                                    children: v
                                }), (0,
                                l.jsx)("span", {
                                    className: "text-yellow-400 text-xs text-left",
                                    dir: "ltr",
                                    children: N
                                })]
                            }), (0,
                            l.jsx)("button", {
                                onClick: () => t(!e),
                                className: "text-gray-300 hover:text-white",
                                children: (0,
                                l.jsx)(n.A, {
                                    size: 16
                                })
                            }), (0,
                            l.jsx)("button", {
                                onClick: () => r(!a),
                                className: "text-gray-300 hover:text-white",
                                children: (0,
                                l.jsx)(o.A, {
                                    size: 16
                                })
                            }), a && (0,
                            l.jsxs)("div", {
                                className: "absolute top-full mt-2 right-0 bg-[#1a1a1a] border border-gray-700 rounded p-2 w-64 z-50",
                                children: [(0,
                                l.jsxs)("select", {
                                    className: "w-full mb-2 px-3 py-2 bg-black text-white rounded",
                                    value: P,
                                    onChange: e => C(e.target.value),
                                    children: [(0,
                                    l.jsx)("option", {
                                        value: "player",
                                        children: "Player"
                                    }), (0,
                                    l.jsx)("option", {
                                        value: "guild",
                                        children: "Guild"
                                    })]
                                }), (0,
                                l.jsx)("input", {
                                    type: "text",
                                    placeholder: "guild" === P ? "Guild name" : "Player name",
                                    className: "w-full px-3 py-2 bg-black text-white rounded mb-2",
                                    value: f,
                                    onChange: e => j(e.target.value)
                                }), (0,
                                l.jsx)(c(), {
                                    href: "guild" === P ? "/guilds/search?name=".concat(encodeURIComponent(f)) : "/player/".concat(encodeURIComponent(f), "?page=Overview"),
                                    className: "block bg-yellow-500 hover:bg-yellow-600 text-black text-center py-2 rounded font-semibold",
                                    children: "guild" === P ? "View Guild" : "View Profile"
                                })]
                            })]
                        }) : (0,
                        l.jsx)(c(), {
                            href: "javascript:",
                            className: "text-yellow-400 hover:underline font-medium",
                            children: "Login"
                        })
                    }), e && y && (0,
                    l.jsxs)("div", {
                        className: "absolute top-full right-0 mt-3 bg-[#1a1a1a] border border-gray-700 rounded-md w-56 text-right shadow-xl p-3 space-y-2 z-50",
                        children: [(0,
                        l.jsxs)(c(), {
                            href: "/player/".concat(v),
                            className: "flex items-center gap-2 hover:text-yellow-400 cursor-pointer",
                            children: [(0,
                            l.jsx)(x.A, {
                                size: 16
                            }), " Profile"]
                        }), (0,
                        l.jsxs)(c(), {
                            href: "/friends",
                            className: "flex items-center gap-2 hover:text-yellow-400 cursor-pointer",
                            children: [(0,
                            l.jsx)(x.A, {
                                size: 16
                            }), " Friends"]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex items-center gap-2 hover:text-yellow-400 cursor-pointer",
                            children: [(0,
                            l.jsx)(d.A, {
                                size: 16
                            }), " Notifications"]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex items-center gap-2 hover:text-yellow-400 cursor-pointer",
                            children: [(0,
                            l.jsx)(p.A, {
                                size: 16
                            }), " Cart"]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex items-center gap-2 hover:text-yellow-400 cursor-pointer",
                            children: [(0,
                            l.jsx)(m.A, {
                                size: 16
                            }), " Currency [ $ ]"]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex items-center gap-2 hover:text-yellow-400 cursor-pointer",
                            children: [(0,
                            l.jsx)(u.A, {
                                size: 16
                            }), " Language [English]"]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex items-center gap-2 hover:text-yellow-400 cursor-pointer",
                            children: [(0,
                            l.jsx)(h.A, {
                                size: 16
                            }), " Settings"]
                        }), (0,
                        l.jsxs)("div", {
                            onClick: () => {
                                localStorage.removeItem("uuid"),
                                localStorage.removeItem("name"),
                                localStorage.removeItem("rank"),
                                window.location.href = "/login"
                            }
                            ,
                            className: "border-t border-gray-700 pt-2 flex items-center gap-2 text-red-500 hover:text-red-400 cursor-pointer",
                            children: [(0,
                            l.jsx)(g.A, {
                                size: 16
                            }), " Logout"]
                        })]
                    })]
                })
            })
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [740, 862, 441, 684, 358], () => t(1791)),
    _N_E = e.O()
}
]);
