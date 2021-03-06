import React, { useRef } from 'react';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { Animated, Text, TouchableOpacity, View, Image, ScrollView, FlatList, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native'

const Home = () => {

    const [viewMode, setViewMode] = React.useState("chart");


    const confirmStatus = 'c';
    const pendingStatus = 'p';

    let categoriesData = [
        {
            id: 1,
            name: "Education",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition fee",
                    location: "Wah,Pakistan",
                    total: 100.00,
                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardward",
                    location: "Wah,Pakistan",
                    total: 30.00,
                    status: pendingStatus
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "Wah,Pakistan",
                    total: 20.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "Wah,Pakistan",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Nutrition",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "Wah,Pakistan",
                    total: 25.00,
                    status: pendingStatus,
                },

                {
                    id: 6,
                    title: "Protein powder",
                    description: "Protein",
                    location: "Wah,Pakistan",
                    total: 50.00,
                    status: confirmStatus,
                },

            ],
        },
        {
            id: 3,
            name: "Child",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "Wah,Pakistan",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "Wah,Pakistan",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "Wah,Pakistan",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "Wah,Pakistan",
                    total: 20.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Beauty & Care",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "Wah,Pakistan",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: "Wah,Pakistan",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "Wah,Pakistan",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "Wah,Pakistan",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Sports",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: "Wah,Pakistan",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "Wah,Pakistan",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Clothing",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "Wah,Pakistan",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "Wah,Pakistan",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ];
    const categoryListHeightAnimationValue = React.useRef(new Animated.Value(115)).current;
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [showMoreToggle, setshowMoreToggle] = React.useState(false);
    function renderNav() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 80,
                alignItems: 'flex-end',
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}>
                <TouchableOpacity style={{ justifyContent: 'center', width: 50 }} onPress={() => console.log('BackButton is pressed')}>
                    <Image source={icons.back_arrow} style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center', width: 50, alignItems: 'flex-end' }} onPress={() => console.log('More is pressed')}>
                    <Image source={icons.more} style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Expenses</Text>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Summary (private)</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                    <View
                        style={{
                            height: 50, width: 50,
                            backgroundColor: COLORS.lightGray,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>11 Nov 2020</Text>
                        <Text style={{ color: COLORS.darkgray, ...FONTS.body3 }}>18% more than last month</Text>
                    </View>
                </View>

            </View>
        )
    }
    function renderCategoryHeaderSection() {

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: SIZES.padding,
                }}
            >
                <View>
                    <Text style={{ color: COLORS.primary }}>Categories</Text>
                    <Text style={{ color: COLORS.darkgray }}>{categories.length} Total</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
                            borderRadius: 25,
                            height: 50,
                            width: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => setViewMode('chart')}
                    >
                        <Image source={icons.chart} resizeMode='contain'
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: viewMode == "list" ? COLORS.secondary : null,
                            borderRadius: 25,
                            height: 50,
                            width: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image source={icons.menu} resizeMode='contain'
                            style={{
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray, height: 20, width: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderCategoryList() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        margin: 5,
                        paddingVertical: SIZES.radius,
                        backgroundColor: COLORS.white,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 5,
                        ...styles.shadow
                    }}
                    onPress={() => {
                        console.log('Selected Item => ', item)
                        setSelectedCategory(item)
                    }}
                >
                    <Image
                        source={item.icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: item.color
                        }}
                    />
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.primary }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View
                    style={{
                        height: categoryListHeightAnimationValue
                    }}
                >
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: SIZES.base
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 115,
                                duration: 300,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 172.5,
                                duration: 300,
                                useNativeDriver: false
                            }).start()
                        }
                        setshowMoreToggle(!showMoreToggle)
                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        style={{
                            width: 15,
                            height: 15,
                            marginLeft: 5,
                            alignSelf: 'center'
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    function renderIncomingExpenseTitle() {
        return (
            <View
                style={{ padding: SIZES.padding, backgroundColor: COLORS.lightGray2 }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>Incoming Expenses</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
            </View>
        )
    }
    function renderIncomingExpenses() {
        let allExpenses = selectedCategory ? selectedCategory.expenses : [];
        let incomingExpenses = allExpenses.filter(expense => expense.status == 'p');
        const renderItem = ({ item, index }) => (
            <View
                style={{
                    width: 300,
                    marginRight: SIZES.padding,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginVertical: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
                    <View
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: SIZES.base
                        }}
                    >
                        <Image
                            source={selectedCategory.icon}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: selectedCategory.color
                            }}
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                ...FONTS.h3,
                                color: selectedCategory.color
                            }}
                        >{selectedCategory.name}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
                    {/* <Text style={{ ...FONTS.body3,  color: COLORS.lightGray }}>{item.title}</Text> */}
                    <Text style={{ fontWeight: 'bold' }}>Location</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <Image source={icons.pin} style={{ height: 20, width: 20, tintColor: COLORS.secondary, marginRight: 5 }} />
                        <Text>{item.location}</Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomStartRadius: SIZES.radius,
                        borderBottomEndRadius: SIZES.radius,
                        backgroundColor: selectedCategory.color
                    }}
                >
                    <Text style={{ ...FONTS.body3, color: COLORS.white }}>Confirm {item.total.toFixed(2)} USD</Text>

                </View>
            </View>
        )
        return (
            <View>
                {renderIncomingExpenseTitle()}
                {
                    incomingExpenses.length > 0 &&
                    <FlatList
                        data={incomingExpenses}
                        renderItem={renderItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${renderItem.id}`}
                    />
                }
                {
                    incomingExpenses.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.primary }}>No Record Found</Text>
                    </View>
                }
            </View>
        )
    }
    function processCategoryDataToDisplay() {
        let chartData = categories.map((item) => {
            let confirmExpenses = item.expenses.filter(status => status.status == "c");
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);
            return {
                name: item.name,
                id: item.id,
                expenseCount: confirmExpenses.length,
                color: item.color,
                y: total
            }
        })

        let filterChartData = chartData.filter(a => a.y > 0);
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed();
            return {
                name: item.name,
                expenseCount: item.expenseCount,
                color: item.color,
                y: Number(item.y),
                label: `${percentage}%`,
                id: item.id
            }
        })

        return finalChartData;
    }
    function setSelectedCategoryName(name) {
        console.log('WOrks?');
        let category = categories.filter(x => x.name == name);
        setSelectedCategoryName(category);
    }
    function renderChart() {
        let chartData = processCategoryDataToDisplay();
        let colorScales = chartData.map((item) => item.color);
        let totalExpense = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0);
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <VictoryPie
                    data={chartData}
                    colorScale={colorScales}
                    labels={(datum) => `${datum.y}`}
                    radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name)
                        ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10
                    }
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => { (SIZES.width * 0.4 + innerRadius) / 2.5 }}
                    style={{
                        labels: { fill: COLORS.white, ...FONTS.body3 },
                        parent: {
                            ...styles.shadow
                        }
                    }}
                    width={SIZES.width * 0.8}
                    height={SIZES.width * 0.8}
                    events={
                        [
                            {
                                target: "data",
                                eventHandlers: {
                                    onPress: () => {
                                        return [
                                            {
                                                target: "labels",
                                                mutation: (props) => {
                                                    console.log('Whats In Propos', props)
                                                    let categoryName = chartData[props.index].name
                                                    setSelectedCategoryName(categoryName)
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                />
                <View style={{
                    position: 'absolute',
                    top: '42%',
                    left: '42%'
                }}>
                    <Text style={{ textAlign: 'center', ...FONTS.h3 }}>{totalExpense}</Text>
                    <Text style={{ textAlign: 'center', ...FONTS.body3 }}>Expenses</Text>
                </View>
            </View>
        )
    }
    function processCategoryDataToDisplay() {

    }
    function renderExpenseSummary() {
        let data = processCategoryDataToDisplay();
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 10,
                        backgroundColor: item.color,
                        paddingHorizontal: SIZES.radius,
                        height: 40
                    }}

                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 20, height20, backgroundColor: COLORS.white, borderRadius: 5 }}>

                        </View>
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.h3 }}>{item.name}</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.y} USD - {item.label}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => `{${item.id}`} />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {renderNav()}
            {renderHeader()}
            {renderCategoryHeaderSection()}
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingExpenses()}
                    </View>
                }
                {
                    viewMode == "chart" &&
                    <View>
                        {renderChart()}
                        {/* {renderExpenseSummary()} */}
                    </View>
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            height: 2, width: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    }
})
export default Home;