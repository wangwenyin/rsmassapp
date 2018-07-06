<template>
     <div class="margin60" style="height:100%">
         <div class="btn">
             <router-link :to="{name:'paramSet'}">
                <el-button type="primary" size='mini'>上一步</el-button>
             </router-link>
                <el-button @click="onSubmit" size='mini'>生成报告</el-button>
                <el-button @click="onSubmit" size='mini'>检验完毕</el-button>
         </div>      
         <!-- <el-row > 
             <el-col :span="24">
                 <div style="margin-left:80%">
                     <router-link :to="{name:'paramSet'}">
                         <el-button type="primary" @click="onSubmit" size='mini'>上一步</el-button>
                     </router-link>
                         <el-button @click="onSubmit" size='mini'>生成报告</el-button>
                         <el-button @click="onSubmit" size='mini'>检验完毕</el-button>
                 </div>
             </el-col>
        </el-row> -->
        <el-tabs ref="tabs" v-model="activeName" type="card" @tab-click="handle">           
            <el-tab-pane label="总体情况" name="all" v-if="fxfsAll==='All'">                  
                    <el-form ref="form"  label-width="100px" label-position="right">
                        <el-row>
                            <el-col :span="19">
                                <span class="title-small">结论</span>
                            </el-col>                          
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                    <el-input type="textarea" v-model="desc1" ></el-input>
                                </div>
                            </el-col>
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                             </el-col>       
                                    <!-- <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本轮评估价格水平是当前市场价格水平的99.8％， 符合IAAO给出的90％－110％估价水平标准，表明与市场价格水平吻合度很高。
                                    </span> -->
                                
                        </el-row>
                        <el-row>
                            <span class="title-small">估价水平检验</span>
                        </el-row>
                        <el-row>
                            <div style="margin-top:18px;margin-bottom:18px">
                                <el-table :data="tableData1" border ref="table" style="width: 60%">
                                    <el-table-column prop="type_Level" label="类型">
                                    </el-table-column>
                                    <el-table-column prop="caseNum_Level" label="案例数量">
                                    </el-table-column>
                                    <el-table-column prop="rateCenter_Level" label="比率中位数">
                                    </el-table-column>
                                    <el-table-column prop="rateAvg_Level" label="比率平均数">
                                    </el-table-column>
                                    <el-table-column prop="rateMode_Level" label="比率众数">
                                    </el-table-column>
                                    <el-table-column label="案例详情">
                                        <template slot-scope="scope">
                                            <router-link :to="{name:'CaseSearch'}" >
                                                <el-button type="text" size="small">查看</el-button>
                                            </router-link>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                    <el-input type="textarea" v-model="desc1" ></el-input>
                                    <!-- <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本轮评估价格水平是当前市场价格水平的99.8％，符合IAAO给出的90％－110％估价水平标准，表明与市场价格水平吻合度很高。</span> -->
                                </div>

                            </el-col>
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                             </el-col> 
                        </el-row>
                        <el-row>
                            <span class="title-small">估价结果一致性检验</span>
                        </el-row>
                        <el-row>
                           
                            <div style="margin-top:18px;margin-bottom:18px">
                               
                                <el-table :data="tableData2" border ref="table" style="width: 60%">
                                    <el-table-column prop="type_Result" label="类型">
                                    </el-table-column>
                                    <el-table-column prop="caseNum_Result" label="案例数量">
                                    </el-table-column>
                                    <el-table-column prop="rateRange_Result" label="比率极差">
                                    </el-table-column>
                                    <el-table-column prop="rateDispersion_Result" label="平均绝对离差">
                                    </el-table-column>
                                    <el-table-column prop="dispersed_Result" label="离散系数">
                                    </el-table-column>
                                    <el-table-column prop="standard_Result" label="比率标准差">
                                    </el-table-column>
                                    <el-table-column prop="variation_Result" label="变异系数">
                                    </el-table-column>
                                    <el-table-column prop="related_Result" label="价格相关差">
                                    </el-table-column>
                                </el-table>
                                
                            </div>
                           
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                    <el-input type="textarea" v-model="desc2" ></el-input>
                                    <!-- <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评估比率的离散系数COD是5.2，符合5－10的标准，表明本轮评估结果具有较好的一致性；本轮评估时点评估比率的价格相关差是1.004， 符合0.98－1.03的标准，表明本轮评估结果具有较好的垂直公平性。 -->
                                    <!-- //</span> -->
                                </div>
                            </el-col>
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                             </el-col> 
                        </el-row>
                        <el-row>
                             <span class="title-small">正态性检验</span>
                         </el-row>
                         <el-row> 
                            <el-col :span="10">
                                <div id="echartsAll" :style="{height:height,width:width}"  ></div> 
                             </el-col>
                            <el-col :span="10">
                                <div style="margin-top:54px">
                                    <div  :style="{width:widthAll}"   style="text-align:center;line-height:38px;background-color: #585858;height:38px;"><font  color="#fff">Kolmogorov-Smirnov检验</font></div>
                                        <el-table :data="tableData_allks" border ref="tableAll" style="width: 60%">
                                            <el-table-column prop="statNum"  label="统计量">
                                            </el-table-column>
                                            <el-table-column prop="df"   label="df">
                                            </el-table-column>
                                            <el-table-column prop="Sig"  label="Sig">
                                            </el-table-column>
                                        </el-table>
                                    <div  :style="{width:widthAll}"  style="text-align:center;line-height:38px;background-color: #585858;height:38px;"><font  color="#fff">Shapiro-Wilk检验</font></div>
                                        <el-table :data="tableData_allsw" border  style="width: 60%">
                                            <el-table-column prop="statNum1" label="统计量">
                                            </el-table-column>
                                            <el-table-column prop="df1" label="df">
                                            </el-table-column>
                                            <el-table-column prop="Sig1" label="Sig">
                                            </el-table-column>
                                        </el-table>
                                    <!-- <table border="1" bordercolor="#a0c6e5" style="border-collapse:collapse;">
                                        <tr >
                                            <th colspan="3" style="width:350px" >Kolmogorov-Smirnov检验</th>
                                        </tr>
                                        <tr>
                                           <th>统计量</th>
                                           <th>df</th>
                                           <th>Sig</th>
                                        </tr>
                                        <tr>
                                           <td style="">.078</td>
                                           <td>411</td>
                                           <td>.000</td>
                                        </tr>
                                        <tr>
                                           <th colspan="3">Shapiro-Wilk检验</th>
                                        </tr>
                                        <tr>
                                           <th>统计量</th>
                                           <th>df</th>
                                           <th>Sig</th>
                                        </tr>
                                        <tr>
                                           <td>.974</td>
                                           <td>411</td>
                                           <td>.000</td>
                                        </tr>
                                    </table> -->
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            
                        </el-row>
                    </el-form>
            </el-tab-pane>
            <el-tab-pane label="一级用途分组" name="first" v-if="fxfsFirst==='First'">
                    <el-form ref="form"  label-width="100px" label-position="right">
                        <el-row>
                           <el-col :span="19">
                                <span class="title-small">结论</span>
                            </el-col>
                            <!-- <el-col :span="5">
                                <div style="margin-left:60px">
                                   <router-link :to="{name:'paramSet'}">
                                       <el-button type="primary" @click="onSubmit" size='mini'>上一步</el-button>
                                   </router-link>
                                       <el-button @click="onSubmit" size='mini'>生成报告</el-button>
                                       <el-button @click="onSubmit" size='mini'>检验完毕</el-button>
                                </div>
                            </el-col> -->
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                    <el-input type="textarea" v-model="desc1" ></el-input>
                                    <!-- <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本轮评估价格水平是当前市场价格水平的99.8％，符合IAAO给出的90％－110％估价水平标准，表明与市场价格水平吻合度很高。</span> -->
                                </div>
                            </el-col>
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                             </el-col> 
                        </el-row>
                        <el-row>
                            <span class="title-small">估价水平检验</span>
                        </el-row>
                        <el-row>
                            <div style="margin-top:18px;margin-bottom:18px">
                                <el-table :data="tableData3" border ref="table" style="width: 60%">
                                    <el-table-column prop="type_Level" label="类型">
                                    </el-table-column>
                                    <el-table-column prop="caseNum_Level" label="案例数量">
                                    </el-table-column>
                                    <el-table-column prop="rateCenter_Level" label="比率中位数">
                                    </el-table-column>
                                    <el-table-column prop="rateAvg_Level" label="比率平均数">
                                    </el-table-column>
                                    <el-table-column prop="rateMode_Level" label="比率众数">
                                    </el-table-column>
                                    <el-table-column label="案例详情">
                                        <template slot-scope="scope">
                                            <router-link :to="{name:'CaseSearch'}" >
                                                <el-button type="text" size="small">查看</el-button>
                                            </router-link>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                    <el-input type="textarea" v-model="desc1" ></el-input>
                                    <!-- <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本轮评估价格水平是当前市场价格水平的99.8％，符合IAAO给出的90％－110％估价水平标准，表明与市场价格水平吻合度很高。</span> -->
                                </div>
                            </el-col>
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                             </el-col> 
                        </el-row>
                        <el-row>
                            <span class="title-small">估价结果一致性检验</span>
                        </el-row>
                        <el-row>
                            <div style="margin-top:18px;margin-bottom:18px">
                                <el-table :data="tableData4" border ref="table" style="width: 60%">
                                    <el-table-column prop="type_Result" label="类型">
                                    </el-table-column>
                                    <el-table-column prop="caseNum_Result" label="案例数量">
                                    </el-table-column>
                                    <el-table-column prop="rateRange_Result" label="比率极差">
                                    </el-table-column>
                                    <el-table-column prop="rateDispersion_Result" label="平均绝对离差">
                                    </el-table-column>
                                    <el-table-column prop="dispersed_Result" label="离散系数">
                                    </el-table-column>
                                    <el-table-column prop="standard_Result" label="比率标准差">
                                    </el-table-column>
                                    <el-table-column prop="variation_Result" label="变异系数">
                                    </el-table-column>
                                    <el-table-column prop="related_Result" label="价格相关差">
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                    <el-input type="textarea" v-model="desc2" ></el-input>
                                    <!-- <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评估比率的离散系数COD是5.2，符合5－10的标准，表明本轮评估结果具有较好的一致性；本轮评估时点评估比率的价格相关差是1.004， 符合0.98－1.03的标准，表明本轮评估结果具有较好的垂直公平性。
                                    </span> -->
                                </div>
                            </el-col>
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                             </el-col> 
                        </el-row>
                        <el-row>
                            <el-col :span="9">
                                <span class="title-small">正态性检验</span>
                            </el-col>
                            <el-col :span="9">
                                <el-select  size='mini' style="width:100px" v-model="yt" >
                                    <el-option label="住宅" value="住宅" ></el-option>
                                    <el-option label="商业" value="商业"></el-option>
                                    <el-option label="办公" value="办公"></el-option>
                                    <el-option label="工业" value="办公"></el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                        <el-row> 
                            <el-col :span="10">
                                <div id="echartsFrist" :style="{height:height,width:width}" ></div> 
                             </el-col>
                            <el-col :span="10">
                                <div style="margin-top:54px">
                                    <div  :style="{width:widthFrist}"  style="text-align:center;line-height:38px;background-color: #585858;height:38px;"><font  color="#fff">Kolmogorov-Smirnov检验</font></div>
                                        <el-table :data="tableData_allks" border ref="tableFrist" style="width: 60%"  >
                                            <el-table-column prop="statNum"  label="统计量">
                                            </el-table-column>
                                            <el-table-column prop="df"   label="df">
                                            </el-table-column>
                                            <el-table-column prop="Sig"  label="Sig">
                                            </el-table-column>
                                        </el-table>
                                    <div  :style="{width:widthFrist}"  style="text-align:center;line-height:38px;background-color: #585858;height:38px;"><font  color="#fff">Shapiro-Wilk检验</font></div>
                                        <el-table :data="tableData_allsw" border  style="width: 60%">
                                            <el-table-column prop="statNum1" label="统计量">
                                            </el-table-column>
                                            <el-table-column prop="df1" label="df">
                                            </el-table-column>
                                            <el-table-column prop="Sig1" label="Sig">
                                            </el-table-column>
                                        </el-table>
                                   <!--  <table border="1" bordercolor="#a0c6e5" style="border-collapse:collapse;width:330px,height:200px">
                                        <tr>
                                            <th colspan="3" style="width:350px">Kolmogorov-Smirnov检验</th>
                                        </tr>
                                        <tr>
                                            <th>统计量</th>
                                            <th>df</th>
                                            <th>Sig</th>
                                        </tr>
                                        <tr>
                                            <td style="">.078</td>
                                            <td>411</td>
                                            <td>.000</td>
                                        </tr>
                                        <tr>
                                           <th colspan="3">Shapiro-Wilk检验</th>
                                        </tr>
                                        <tr>
                                           <th>统计量</th>
                                           <th>df</th>
                                           <th>Sig</th>
                                        </tr>
                                        <tr>
                                           <td>.974</td>
                                           <td>411</td>
                                           <td>.000</td>
                                        </tr>
                                    </table> -->
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                        </el-row>
                    </el-form>
            </el-tab-pane>
            <el-tab-pane label="二级用途分组" name="second"  v-if="fxfsSecond==='Second'">
            </el-tab-pane>
            <el-tab-pane label="行政区分组" name="xzq" v-if="fxfsXZQ==='XZQ'">
                    <el-form ref="form" label-width="100px" label-position="right">
                        <el-row>
                            <el-col :span="19">
                                <span class="title-small">结论</span>
                            </el-col>
                            <!-- <el-col :span="5">
                                <div style="margin-left:60px">
                                   <router-link :to="{name:'paramSet'}">
                                       <el-button type="primary" @click="onSubmit" size='mini'>上一步</el-button>
                                   </router-link>
                                       <el-button @click="onSubmit" size='mini'>生成报告</el-button>
                                       <el-button @click="onSubmit" size='mini'>检验完毕</el-button>
                                </div>
                            </el-col> -->
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                     <el-input type="textarea" v-model="desc1" ></el-input>
                                    <!-- <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本轮评估价格水平是当前市场价格水平的99.8％，符合IAAO给出的90％－110％估价水平标准，表明与市场价格水平吻合度很高。</span> -->
                                </div>
                            </el-col>                  
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                             </el-col> 
                        </el-row>
                        <el-row>
                            <span class="title-small">估价水平检验</span>
                        </el-row>
                        <el-row>
                            <div style="margin-top:18px;margin-bottom:18px">
                                <el-table :data="tableData5" border ref="table" style="width: 60%">
                                    <el-table-column prop="type_Level" label="类型">
                                    </el-table-column>
                                    <el-table-column prop="caseNum_Level" label="案例数量">
                                    </el-table-column>
                                    <el-table-column prop="rateCenter_Level" label="比率中位数">
                                    </el-table-column>
                                    <el-table-column prop="rateAvg_Level" label="比率平均数">
                                    </el-table-column>
                                    <el-table-column prop="rateMode_Level" label="比率众数">
                                    </el-table-column>
                                    <el-table-column label="案例详情">
                                        <template slot-scope="scope">
                                            <router-link :to="{name:'CaseSearch'}" target="_blank">
                                                <el-button type="text" size="small">查看</el-button>
                                            </router-link>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                    <el-input type="textarea" v-model="desc1" ></el-input>
                                   <!--  <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本轮评估价格水平是当前市场价格水平的99.8％，符合IAAO给出的90％－110％估价水平标准，表明与市场价格水平吻合度很高。</span> -->
                                </div>
                            </el-col>
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                            </el-col> 
                        </el-row>
                        <el-row>
                            <span class="title-small">估价结果一致性检验</span>
                        </el-row>
                        <el-row>
                            <div style="margin-top:18px;margin-bottom:18px">
                                <el-table :data="tableData6" border ref="table" style="width: 60%">
                                    <el-table-column prop="type_Result" label="类型">
                                    </el-table-column>
                                    <el-table-column prop="caseNum_Result" label="案例数量">
                                    </el-table-column>
                                    <el-table-column prop="rateRange_Result" label="比率极差">
                                    </el-table-column>
                                    <el-table-column prop="rateDispersion_Result" label="平均绝对离差">
                                    </el-table-column>
                                    <el-table-column prop="dispersed_Result" label="离散系数">
                                    </el-table-column>
                                    <el-table-column prop="standard_Result" label="比率标准差">
                                    </el-table-column>
                                    <el-table-column prop="variation_Result" label="变异系数">
                                    </el-table-column>
                                    <el-table-column prop="related_Result" label="价格相关差">
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-row>
                        <el-row>
                            <el-col :span="15">
                                <div style="margin-top:18px;margin-bottom:18px">
                                   <el-input type="textarea" v-model="desc2" ></el-input>
                                   <!--  <span style="font-size:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评估比率的离散系数COD是5.2，符合5－10的标准，表明本轮评估结果具有较好的一致性；本轮评估时点评估比率的价格相关差是1.004， 符合0.98－1.03的标准，表明本轮评估结果具有较好的垂直公平性。
                                    </span> -->
                                </div>
                            </el-col>
                            <el-col :span="2"> 
                                 <div style="margin-top:41px;margin-left: 12px">   
                                <router-link :to="{name:'CaseSearch'}">
                                    <el-button type="primary" size='mini' >保存</el-button>
                                </router-link>
                                 </div>
                            </el-col> 
                        </el-row>
                        <el-row>
                            <el-col :span="9">
                            <span class="title-small">正态性检验</span>
                            </el-col>
                            <el-col :span="9">
                                 <el-select  size='mini' style="width:100px"  v-model="xzq">
                                    <el-option label="罗湖区" value="罗湖区" ></el-option>
                                    <el-option label="龙岗区" value="龙岗区"></el-option>
                                    <el-option label="盐田区" value="盐田区"></el-option>
                                    <el-option label="福田区" value="福田区"></el-option>
                                    <el-option label="南山区" value="南山区"></el-option>
                                    <el-option label="宝安区" value="宝安区"></el-option>
                                    <el-option label="大鹏新区" value="龙岗区"></el-option>
                                    <el-option label="龙华新区" value="盐田区"></el-option>
                                    <el-option label="光明新区" value="福田区"></el-option>
                                 </el-select>
                            </el-col>
                        </el-row>
                        <el-row> 
                            <el-col :span="10">
                                <div id="echartsXZQ" :style="{height:height,width:width}" ></div> 
                             </el-col>
                            <el-col :span="10">
                                <div style="margin-top:54px">
                                    <div  :style="{width:widthXZQ}" style="text-align:center;line-height:38px;background-color: #585858;height:38px;"><font  color="#fff">Kolmogorov-Smirnov检验</font></div>
                                        <el-table :data="tableData_allks" border ref="tableXZQ" style="width: 60%">
                                            <el-table-column prop="statNum"  label="统计量">
                                            </el-table-column>
                                            <el-table-column prop="df"   label="df">
                                            </el-table-column>
                                            <el-table-column prop="Sig"  label="Sig">
                                            </el-table-column>
                                        </el-table>
                                    <div  :style="{width:widthXZQ}" style="text-align:center;line-height:38px;background-color: #585858;height:38px;"><font  color="#fff">Shapiro-Wilk检验</font></div>
                                        <el-table :data="tableData_allsw" border ref="table" style="width: 60%">
                                            <el-table-column prop="statNum1" label="统计量">
                                            </el-table-column>
                                            <el-table-column prop="df1" label="df">
                                            </el-table-column>
                                            <el-table-column prop="Sig1" label="Sig">
                                            </el-table-column>
                                        </el-table>
                                   <!--  <table border="1" bordercolor="#a0c6e5" style="border-collapse:collapse;width:330px,height:200px">
                                        <tr>
                                            <th colspan="3" style="width:350px">Kolmogorov-Smirnov检验</th>
                                        </tr>
                                        <tr>
                                            <th>统计量</th>
                                            <th>df</th>
                                            <th>Sig</th>
                                        </tr>
                                        <tr>
                                            <td style="">.078</td>
                                            <td>411</td>
                                            <td>.000</td>
                                        </tr>
                                        <tr>
                                            <th colspan="3">Shapiro-Wilk检验</th>
                                        </tr>
                                        <tr>
                                            <th>统计量</th>
                                            <th>df</th>
                                            <th>Sig</th>
                                        </tr>
                                        <tr>
                                            <td>.974</td>
                                            <td>411</td>
                                            <td>.000</td>
                                        </tr>
                                    </table> -->
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                        </el-row>
                    </el-form>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      widthAll: '',
      widthFrist: '',
      widthXZQ: '',
      yt: '住宅',
      xzq: '罗湖区',
      fxfsAll: '',
      fxfsFirst: '',
      fxfsSecond: '',
      fxfsXZQ: '',
      tableData_allks: [
        {
          statNum: '.078',
          df: 411,
          Sig: '.000'
        }
      ],
      tableData_allsw: [
        {
          statNum1: '.974',
          Sig1: '.000',
          df1: 411
        }
      ],
      tableData1: [
        {
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          type_Level: '全部',
          rateMode_Level: 1.003
        }
      ],
      tableData2: [
        {
          type_Result: '全部',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        }
      ],
      tableData3: [
        {
          type_Level: '住宅',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        },
        {
          type_Level: '商业',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        },
        {
          type_Level: '办公',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        },
        {
          type_Level: '工业',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        }
      ],
      tableData4: [
        {
          type_Result: '住宅',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        },
        {
          type_Result: '商业',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        },
        {
          type_Result: '办公',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        },
        {
          type_Result: '工业',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        }
      ],
      tableData5: [
        {
          type_Level: '罗湖区',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        },
        {
          type_Level: '福田区',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        },
        {
          type_Level: '南山区',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        },
        {
          type_Level: '大鹏新区',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        },
        {
          type_Level: '光明新区',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        },
        {
          type_Level: '盐田区',
          caseNum_Level: 10462,
          rateCenter_Level: 0.959,
          rateAvg_Level: 6.2,
          rateMode_Level: 1.003
        }
      ],
      tableData6: [
        {
          type_Result: '罗湖区',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        },
        {
          type_Result: '福田区',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        },
        {
          type_Result: '南山区',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        },
        {
          type_Result: '大鹏新区',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        },
        {
          type_Result: '光明新区',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        },
        {
          type_Result: '盐田区',
          caseNum_Result: 10462,
          rateRange_Result: 1.56,
          rateDispersion_Result: 0.959,
          dispersed_Result: 6.2,
          standard_Result: 1.003,
          variation_Result: 234,
          related_Result: 0.87
        }
      ],
      activeName: '0',
      desc1: '本轮评估价格水平是当前市场价格水平的99.8％，符合IAAO给出的90％－110％估价水平标准，表明与市场价格水平吻合度很高。',
      desc2: '评估比率的离散系数COD是5.2，符合5－10的标准，表明本轮评估结果具有较好的一致性；本轮评估时点评估比率的价格相关差是1.004， 符合0.98－1.03的标准，表明本轮评估结果具有较好的垂直公平性。'
    }
  },
  props: {
    height: {
      type: String,
      'default': '370px'
    },
    width: {
      type: String,
      'default': '450px'
    }
  },
  mounted() {
    var fxfsOptionsSelect = this.$route.params.fxfsOptionsSelect
    for (let i = 0; i < fxfsOptionsSelect.length; i++) {
      if (fxfsOptionsSelect[i][i] === '在全体数据进行比率分析') {
        if (this.activeName === '0') {
          this.activeName = 'all'
        }
        this.fxfsAll = 'All'
        this.$nextTick(() => {
          this.echartsAll()
          this.widthAll = this.$refs.tableAll.$el.offsetWidth + 'px'
        })
      }
      if (fxfsOptionsSelect[i][i] === '按一级用途分组进行比率分析') {
        if (this.activeName === '0') {
          this.activeName = 'first'
        }
        this.fxfsFirst = 'First'
        this.$nextTick(() => {
          this.echartsFrist()
          this.widthFrist = this.$refs.tableFrist.$el.offsetWidth + 'px'
          console.log(this.$refs.tableFrist.$el.offsetWidth)
        })
      }
      if (fxfsOptionsSelect[i][i] === '按行政区分组进行比率分析') {
        if (this.activeName === '0') {
          this.activeName = 'xzq'
        }
        this.fxfsXZQ = 'XZQ'
        this.$nextTick(() => {
          this.echartsXZQ()
        })
      }
      if (fxfsOptionsSelect[i][i] === '按二级用途分组进行比率分析') {
        if (this.activeName === '0') {
          this.activeName = 'second'
        }
        this.fxfsSecond = 'Second'
      }
    }
  },
  methods: {
    handle() {
      setTimeout(() => {
        this.widthFrist = this.$refs.tableFrist.$el.offsetWidth + 'px'
      }, 20)
      setTimeout(() => {
        this.widthXZQ = this.$refs.tableXZQ.$el.offsetWidth + 'px'
      }, 20)
    },
    onSubmit() {
    },
    backStep() {
      this.$router.push({ name: 'rateAnal' })
    },

    echartsAll() {
      const echartsAll = echarts.init(document.getElementById('echartsAll'))
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        /* toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        }, */
        calculable: true,
        legend: {
          data: []
        },
        xAxis: [
          {
            type: 'category',
            // name: '回归标准化残差',
            data: ['-6', '-5', '-4', '-3', '-2', '-1', '1', '2', '3', '4', '5', '6']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '频率'
          },
          {
            type: 'value',
            name: '' }
        ],
        series: [
          {
            name: '频率',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '残差',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      echartsAll.setOption(option)
    },
    echartsFrist() {
      const echartsFrist = echarts.init(document.getElementById('echartsFrist'))
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        /* toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        }, */
        calculable: true,
        legend: {
          data: []
        },
        xAxis: [
          {
            type: 'category',
            data: ['-6', '-5', '-4', '-3', '-2', '-1', '1', '2', '3', '4', '5', '6']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '频率'
          },
          {
            type: 'value',
            name: '' }
        ],
        series: [
          {
            name: '频率',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '残差',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      echartsFrist.setOption(option)
    },
    echartsXZQ() {
      const echartsXZQ = echarts.init(document.getElementById('echartsXZQ'))
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        /* toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        }, */
        calculable: true,
        legend: {
          data: []
        },
        xAxis: [
          {
            type: 'category',
            data: ['-6', '-5', '-4', '-3', '-2', '-1', '1', '2', '3', '4', '5', '6']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '频率'
          },
          {
            type: 'value',
            name: '' }
        ],
        series: [
          {
            name: '频率',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '残差',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      echartsXZQ.setOption(option)
    },
    fxfs_handleCheckedChange(value) {}
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/views/datamanage/styles.scss";
.margin60 {
    position: relative;
}
.btn {
    position: absolute;
    top: 6px;
    right: 0;
    z-index: 999
}
.el-row {
  margin-top: 5px;
  margin-bottom: 0px;
}

tr
{ text-align:center;
  height: 40px;
  
}
td
{ 
    width: 40px;
  
}


</style>