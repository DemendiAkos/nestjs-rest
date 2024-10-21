import { Body, Controller, Delete, Get, NotFoundException, Param, Put, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ReplaceProductDto } from './replaceProduct.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  #productList = [
    {
      name: 'Washing Machine',
      prrice: 2000
    },
    {
      name: 'Television',
      prrice: 3000
    },
    {
      name: 'Refrigerator',
      prrice: 4000
    },
    {
      name: 'Air Conditioner',
      prrice: 5000
    },
    {
      name: 'Microwave Oven',
      prrice: 6000
    },
    {
      name: 'Dishwasher',
      prrice: 7000
    },
    {
      name: 'Vacuum Cleaner',
      prrice: 8000
    },
    {
      name: 'Water Purifier',
      prrice: 9000
    },
    {
      name: 'Air Cooler',
      prrice: 10000
    },
    {
      name: 'Water Heater',
      prrice: 11000
    },
  ]


  @Get('products')
  listProducts() {
    return this.#productList;
  }

  @Get('products/:id')
  getProductById(@Param('id') id: string) {
    return JSON.stringify(this.#productList[id]);
  }


  @Delete('products/:id')
  deleteProductById(@Param('id') id: string) {

    if (!this.#productList[id]) {
      throw new NotFoundException('No product found with this ID');
    }
    this.#productList.splice(Number(id), 1);
  }


  @Put('products/:id')
  replaceProductById(@Param('id') id: string, @Body() product: ReplaceProductDto) {
    if (!this.#productList[id]) {
      throw new NotFoundException('No product found with this ID');
    }

    this.#productList[id] = product;
  }
}
