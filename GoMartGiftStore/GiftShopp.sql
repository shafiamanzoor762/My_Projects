USE [master]
GO
/****** Object:  Database [GiftShopp]    Script Date: 5/24/2024 11:09:01 AM ******/
CREATE DATABASE [GiftShopp]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'GiftShopp', FILENAME = N'E:\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\GiftShopp.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'GiftShopp_log', FILENAME = N'E:\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\GiftShopp_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [GiftShopp] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [GiftShopp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [GiftShopp] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [GiftShopp] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [GiftShopp] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [GiftShopp] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [GiftShopp] SET ARITHABORT OFF 
GO
ALTER DATABASE [GiftShopp] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [GiftShopp] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [GiftShopp] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [GiftShopp] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [GiftShopp] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [GiftShopp] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [GiftShopp] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [GiftShopp] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [GiftShopp] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [GiftShopp] SET  DISABLE_BROKER 
GO
ALTER DATABASE [GiftShopp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [GiftShopp] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [GiftShopp] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [GiftShopp] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [GiftShopp] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [GiftShopp] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [GiftShopp] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [GiftShopp] SET RECOVERY FULL 
GO
ALTER DATABASE [GiftShopp] SET  MULTI_USER 
GO
ALTER DATABASE [GiftShopp] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [GiftShopp] SET DB_CHAINING OFF 
GO
ALTER DATABASE [GiftShopp] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [GiftShopp] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [GiftShopp] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [GiftShopp] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'GiftShopp', N'ON'
GO
ALTER DATABASE [GiftShopp] SET QUERY_STORE = ON
GO
ALTER DATABASE [GiftShopp] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [GiftShopp]
GO
/****** Object:  Table [dbo].[Addons]    Script Date: 5/24/2024 11:09:01 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Addons](
	[addid] [int] IDENTITY(1,1) NOT NULL,
	[oid] [int] NULL,
	[addname] [varchar](50) NULL,
	[addPr] [decimal](10, 2) NULL,
 CONSTRAINT [PK__Addons__CDFEBCBAD9736B20] PRIMARY KEY CLUSTERED 
(
	[addid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 5/24/2024 11:09:01 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[admid] [int] IDENTITY(1,1) NOT NULL,
	[admname] [varchar](100) NOT NULL,
	[password] [varchar](50) NOT NULL,
 CONSTRAINT [PK__Admin__F5137C71CF412516] PRIMARY KEY CLUSTERED 
(
	[admid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 5/24/2024 11:09:01 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[cid] [int] IDENTITY(1,1) NOT NULL,
	[cname] [varchar](100) NOT NULL,
	[email] [varchar](100) NOT NULL,
	[password] [varchar](20) NOT NULL,
	[profPic] [varchar](max) NULL,
 CONSTRAINT [PK__Customer__D837D05F17099752] PRIMARY KEY CLUSTERED 
(
	[cid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Gift]    Script Date: 5/24/2024 11:09:01 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gift](
	[gid] [int] IDENTITY(1,1) NOT NULL,
	[gname] [varchar](100) NOT NULL,
	[price] [decimal](10, 2) NOT NULL,
	[category] [varchar](50) NOT NULL,
	[in_stock] [int] NOT NULL,
	[gftImg] [varchar](max) NOT NULL,
 CONSTRAINT [PK__Gift__DCD80EF828D199DC] PRIMARY KEY CLUSTERED 
(
	[gid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderGift]    Script Date: 5/24/2024 11:09:01 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderGift](
	[ogftid] [int] IDENTITY(1,1) NOT NULL,
	[oid] [int] NULL,
	[gid] [int] NULL,
	[quantity] [int] NOT NULL,
	[subtotal] [decimal](10, 2) NOT NULL,
 CONSTRAINT [PK__OrderGif__44522D966269F52E] PRIMARY KEY CLUSTERED 
(
	[ogftid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 5/24/2024 11:09:01 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[oid] [int] IDENTITY(1,1) NOT NULL,
	[cid] [int] NULL,
	[odate] [varchar](50) NULL,
	[t_amt] [int] NOT NULL,
	[ostatus] [varchar](50) NULL,
	[pack_Theme] [varchar](50) NULL,
	[themePr] [int] NULL,
 CONSTRAINT [PK__Orders__C2FFCF13A4DCF7EC] PRIMARY KEY CLUSTERED 
(
	[oid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Addons] ON 

INSERT [dbo].[Addons] ([addid], [oid], [addname], [addPr]) VALUES (22, 21, N'Greeting Card', CAST(3.00 AS Decimal(10, 2)))
SET IDENTITY_INSERT [dbo].[Addons] OFF
GO
SET IDENTITY_INSERT [dbo].[Admin] ON 

INSERT [dbo].[Admin] ([admid], [admname], [password]) VALUES (1, N'Admin', N'admin')
INSERT [dbo].[Admin] ([admid], [admname], [password]) VALUES (2, N'adm', N'adm')
SET IDENTITY_INSERT [dbo].[Admin] OFF
GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([cid], [cname], [email], [password], [profPic]) VALUES (1, N'Ali', N'ali@gmail.com', N'ali', N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Customers\boy.png')
INSERT [dbo].[Customer] ([cid], [cname], [email], [password], [profPic]) VALUES (2, N'Saima', N'Saima@gmail.com', N'saima', N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Customers\girl.png')
INSERT [dbo].[Customer] ([cid], [cname], [email], [password], [profPic]) VALUES (3, N'Saira', N'Saira@gmail.com', N'saira', N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Customers\profile-user.png')
SET IDENTITY_INSERT [dbo].[Customer] OFF
GO
SET IDENTITY_INSERT [dbo].[Gift] ON 

INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (1, N'Backpack', CAST(190.00 AS Decimal(10, 2)), N'Boy', 7, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Backpack.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (2, N'Bouquet', CAST(50.00 AS Decimal(10, 2)), N'Girl', 6, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Bouquet.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (3, N'Cap for Dad', CAST(120.00 AS Decimal(10, 2)), N'Boy', 15, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Cap for Dad.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (4, N'Chocolate & Candies', CAST(250.00 AS Decimal(10, 2)), N'Girl', 5, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Chocolate & Candies.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (5, N'Custom Message Golf  Balls', CAST(45.00 AS Decimal(10, 2)), N'Boy', 8, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Custom Message Golf  Balls.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (6, N'Delightfully Elegant Diary', CAST(35.00 AS Decimal(10, 2)), N'Girl', 8, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Delightfully Elegant Diary.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (7, N'Fun Ride Automobiles', CAST(200.00 AS Decimal(10, 2)), N'Boy', 8, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Fun Ride Automobiles.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (32, N'Kimio Stylish Watch', CAST(250.00 AS Decimal(10, 2)), N'Girl', 8, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Kimio Stylish Watch.png')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (33, N'Laptop Carry Bag', CAST(50.00 AS Decimal(10, 2)), N'Boy', 10, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Laptop Carry Bag.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (34, N'Makeup Gift Set', CAST(550.00 AS Decimal(10, 2)), N'Girl', 12, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Makeup Gift Set.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (35, N'Metal Bangles', CAST(110.00 AS Decimal(10, 2)), N'Girl', 6, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Metal Bangles.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (36, N'Minimalist Keychain', CAST(15.00 AS Decimal(10, 2)), N'Boy', 5, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Minimalist Keychain.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (37, N'Perfume Boys', CAST(60.00 AS Decimal(10, 2)), N'Boy', 7, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Perfume Boys.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (38, N'Personalized Keychains', CAST(25.00 AS Decimal(10, 2)), N'Boy', 8, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Personalized Keychains.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (39, N'Puppy', CAST(140.00 AS Decimal(10, 2)), N'Girl', 8, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Puppy.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (40, N'Red Velvet Cake', CAST(450.00 AS Decimal(10, 2)), N'Girl', 15, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Red Velvet Cake.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (41, N'ROLEX Replica Watch', CAST(250.00 AS Decimal(10, 2)), N'Boy', 13, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\ROLEX Replica Watch.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (42, N'Story Book', CAST(70.00 AS Decimal(10, 2)), N'Girl', 11, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Story Book.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (43, N'Take Anywhere Chair', CAST(80.00 AS Decimal(10, 2)), N'Girl', 10, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Take Anywhere Chair.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (44, N'Twinkle LED Shine Canvas', CAST(90.00 AS Decimal(10, 2)), N'Girl', 9, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Twinkle LED Shine Canvas.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (45, N'Wallet Watch and pen', CAST(95.00 AS Decimal(10, 2)), N'Boy', 12, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Wallet Watch and pen.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (46, N'Weaved Leather Hand Bag', CAST(190.00 AS Decimal(10, 2)), N'Girl', 16, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Weaved Leather Hand Bag.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (47, N'Wireless Charging', CAST(140.00 AS Decimal(10, 2)), N'Boy', 15, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Wireless Charging.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (48, N'Wood Watch Tower', CAST(170.00 AS Decimal(10, 2)), N'Boy', 9, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Wood Watch Tower.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (49, N'Wooden Cufflinks', CAST(30.00 AS Decimal(10, 2)), N'Boy', 5, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Wooden Cufflinks.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (50, N'Gentleman Gift', CAST(350.00 AS Decimal(10, 2)), N'Boy', 10, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Gentleman Gift.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (51, N'Brown-4 Pieces By Lals', CAST(25.00 AS Decimal(10, 2)), N'Girl', 12, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Pretty Gift Box.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (52, N'Gift Box 3Pcs', CAST(25.00 AS Decimal(10, 2)), N'Girl', 9, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Gift Box 3Pcs.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (53, N'Happy New Year', CAST(35.00 AS Decimal(10, 2)), N'Boy', 15, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Happy New Year.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (54, N'Nivea Care For Men', CAST(450.00 AS Decimal(10, 2)), N'Boy', 16, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Nivea Care For Men.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (55, N'New Year Chocolate Cake', CAST(95.00 AS Decimal(10, 2)), N'Girl', 12, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\New Year Chocolate Cake.jpg')
INSERT [dbo].[Gift] ([gid], [gname], [price], [category], [in_stock], [gftImg]) VALUES (56, N'Pretty Gift Box', CAST(440.00 AS Decimal(10, 2)), N'Girl', 10, N'F:\GoMartGiftStore\GoMartGiftStore\Assets\Gifts\Pretty Gift Box.jpg')
SET IDENTITY_INSERT [dbo].[Gift] OFF
GO
SET IDENTITY_INSERT [dbo].[OrderGift] ON 

INSERT [dbo].[OrderGift] ([ogftid], [oid], [gid], [quantity], [subtotal]) VALUES (2, 18, 2, 1, CAST(434.00 AS Decimal(10, 2)))
INSERT [dbo].[OrderGift] ([ogftid], [oid], [gid], [quantity], [subtotal]) VALUES (3, 20, 2, 1, CAST(434.00 AS Decimal(10, 2)))
INSERT [dbo].[OrderGift] ([ogftid], [oid], [gid], [quantity], [subtotal]) VALUES (4, 18, 1, 2, CAST(383.00 AS Decimal(10, 2)))
SET IDENTITY_INSERT [dbo].[OrderGift] OFF
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([oid], [cid], [odate], [t_amt], [ostatus], [pack_Theme], [themePr]) VALUES (18, 3, N'2023-12-15', 50, N'Delivered', N'Ramadan', 7)
INSERT [dbo].[Orders] ([oid], [cid], [odate], [t_amt], [ostatus], [pack_Theme], [themePr]) VALUES (20, 2, N'2023-12-15', 70, N'Processing', N'Eid', 3)
INSERT [dbo].[Orders] ([oid], [cid], [odate], [t_amt], [ostatus], [pack_Theme], [themePr]) VALUES (21, 1, N'2024-5-10', 190, N'Processing', N'', 0)
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
ALTER TABLE [dbo].[Addons]  WITH CHECK ADD  CONSTRAINT [FK__Addons__oid__4CA06362] FOREIGN KEY([oid])
REFERENCES [dbo].[Orders] ([oid])
GO
ALTER TABLE [dbo].[Addons] CHECK CONSTRAINT [FK__Addons__oid__4CA06362]
GO
ALTER TABLE [dbo].[OrderGift]  WITH CHECK ADD  CONSTRAINT [FK__OrderGift__gid__5070F446] FOREIGN KEY([gid])
REFERENCES [dbo].[Gift] ([gid])
GO
ALTER TABLE [dbo].[OrderGift] CHECK CONSTRAINT [FK__OrderGift__gid__5070F446]
GO
ALTER TABLE [dbo].[OrderGift]  WITH CHECK ADD  CONSTRAINT [FK__OrderGift__oid__4F7CD00D] FOREIGN KEY([oid])
REFERENCES [dbo].[Orders] ([oid])
GO
ALTER TABLE [dbo].[OrderGift] CHECK CONSTRAINT [FK__OrderGift__oid__4F7CD00D]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK__Orders__cid__49C3F6B7] FOREIGN KEY([cid])
REFERENCES [dbo].[Customer] ([cid])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK__Orders__cid__49C3F6B7]
GO
USE [master]
GO
ALTER DATABASE [GiftShopp] SET  READ_WRITE 
GO
